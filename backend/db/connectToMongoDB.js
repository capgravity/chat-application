import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        const dbURI = process.env.MONGODB_URI;
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MONGODB")
    }
    catch (error) {
        console.log("Error connecting to database.", error.message)
    }

}

export default connectToMongoDB;