import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { validateEmail, validateSignupData, validateUserName } from '../middlewares/validation.js'


const signup = async (req, res, next) => {
    try {
        const {username, email, password} = req.body

        // Validação de email senha e espaços nos inputs
        const signupValidationResult = validateSignupData(req, res)
        if (signupValidationResult) {
            return res.status(signupValidationResult.statusCode).json(signupValidationResult)
        }

        // Validação de username existente
        const userNameValidateResult = await validateUserName(req, res)
        if(userNameValidateResult) {
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
    
        //Token JWT
        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET,{ expiresIn: '1h'} )

        return res.json({
            success: true,
            statusCode: 200,
            message: "Usuário criado com sucesso",
            token: token
        })

    } catch (err) {
        return res.status(500).json({
            success:false,
            statusCode: 500,
            message: "Erro interno do servidor"
        })
    }
}

export default signup