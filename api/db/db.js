import mongoose from 'mongoose'

const connectDatabase = () => {
    console.log("Wait connecting to database")

    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error))
}

export default connectDatabase