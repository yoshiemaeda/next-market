import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yothtarin:ke7vbmV38oL4EaJq@cluster0.78j44yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    } catch (err) {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB