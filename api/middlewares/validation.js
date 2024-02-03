import User from '../models/user.model.js'

export const validateSignupData = (req, res) => {
    const { username, email, password } = req.body

    // Validação de campos
    if (!username || !email || !password || username === '' || email === "" || password === '') {
        return {
            success: false,
            statusCode: 400,
            message: "Por favor preencha todos os campos."
        }
    }

    // validação de comprimento da senha
    if (password.length < 8 || password.length > 20) {
        return {
            success: false,
            statusCode: 400,
            message: "A senha deve ter entre 8 a 20 caracteres."
        }
    }

    // Validação de complexidade senha
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasDigit = /\d/.test(password)
    const hasSpecialChar = /[!@#$%&(),.?:{}|<>]/.test(password)

    if (!(hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar)) {
        return {
            success: false,
            statusCode: 400,
            message: "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
        }
    }

    // Validação de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return {
            success: false,
            statusCode: 400,
            message: 'Formato de e-mail inválido.'
        };
    }

    return null
}

export const validateUserName = async (req, res) => {
    try {
        const { username } = req.body
        const existingUser = await User.findOne({ username })
    
        if (existingUser) {
            return {
                success: false,
                statusCode: 409,
                message: "Nome de usuário já em uso. Por favor, escolha outro."
            }
        }
        return null
    } catch (err) {
        console.error("Erro de validação de nome de usuário", err)

        return{
            success:false,
            statusCode:500,
            message: "Erro interno de servidor na validação de nome de usuário."
        }
    }
}

export const validateEmail = async (req, res) => {
    try {
        const { email } = req.body
        const existingEmail = await User.findOne({ email })
    
        if (existingEmail) {
            return {
                success: false,
                statusCode: 409,
                message: "Este email já está em uso. Por favor, escolha outro."
            }
        }
        return null
    } catch (err) {
        console.error("Erro na validação de email", err)

        return {
            success: false,
            statusCode: 500,
            message: "Erro interno de servidor na validação de email."
        }
    }
}

