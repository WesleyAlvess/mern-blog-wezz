import User from '../models/user.model.js'
import bcript from 'bcrypt'
import errorHandler from '../utils/error.js'

const signup = async (req, res, next) => {
    try {
        const { username, email, password} = req.body
        if (!username || !email || !password || username === '' || email === "" || password === '') {
            next(errorHandler(400, 'All fields are required'))
        } 

        const hashedPassword = bcript.hashSync(password, 10)

        const newUser = await new User({
            username,
            email,
            password: hashedPassword,
        })

        await newUser.save()
        res.json({message: "User created successfully"})
        console.log(next.err);
    } catch (err) {
        next(err)
    }
}

export default signup