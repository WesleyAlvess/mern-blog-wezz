import express from 'express'
import database from './db/db.js'
import dotenv from'dotenv'
dotenv.config()

const port = process.env.PORT || 3000
const app = express()

// Database connection
database()

// Middlewares
app.use(express.json())


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})