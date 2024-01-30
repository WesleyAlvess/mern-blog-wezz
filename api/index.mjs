import express from 'express'
import database from './db/db.js'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import dotenv from'dotenv'
dotenv.config()

const port = process.env.PORT || 3000
const app = express()

// Database connection
database()

// Middlewares
app.use(express.json())

// Rotes
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})