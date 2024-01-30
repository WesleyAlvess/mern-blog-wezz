import User from '../models/user.model.js'
import bcript from 'bcrypt'

const signup = async (req, res) => {
    try {
        const { username, email, password} = req.body
        if (!username || !email || !password || username === '' || email === "" || password === '') {
            return res.status(400).json({message: 'All fields are required'})
        } 

        const hashedPassword = bcript.hashSync(password, 10)

        const newUser = await new User({
            username,
            email,
            password: hashedPassword,
        })

        await newUser.save()
        res.json({message: "User created successfully"})
    } catch (err) {
        res.status(400).send("Error")
    }
}

export default signup