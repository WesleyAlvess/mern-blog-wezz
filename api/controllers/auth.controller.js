import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { validateEmail, validateSignupData, validateUserName } from '../middlewares/validation.js'


export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body

        // Validação de email senha e espaços nos inputs
        const signupValidationResult = validateSignupData(req, res)
        if (signupValidationResult) {
            return res.status(signupValidationResult.statusCode).json(signupValidationResult)
        }

        // Validação de username existente
        const userNameValidateResult = await validateUserName(req, res)
        if (userNameValidateResult) {
            return res.status(userNameValidateResult.statusCode).json(userNameValidateResult)
        }

        // Validação de email existente
        const validateEmailResult = await validateEmail(req, res)
        if (validateEmailResult) {
            return res.status(validateEmailResult.statusCode).json(validateEmailResult)
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })

        // Salvando usuário
        await newUser.save()

        return res.json({
            success: true,
            statusCode: 200,
            message: "Usuário criado com sucesso",
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Erro interno do servidor"
        })
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password || email === '' || password === '') {
        return res.status(400).json({
            success: false,
            statusCode: 400,
            message: "Por favor preencha todos os campos."
        })
    }
    try {
        // Verificando email
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Credenciais inválidas. Por favor, verifique suas informações e tente novamente."
            })
        }

        // Verificando password bcrypt
        const validPassword = bcrypt.compareSync(password, validUser.password)
        if (!validPassword) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Credenciais inválidas. Por favor, verifique suas informações e tente novamente."
            })
        }

        //Token JWT
        const token = jwt.sign({ userId: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        return res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json({
            success: true,
            statusCode: 200,
            message: "Login bem sucedido"
        });

    } catch (err) {

    }

}
