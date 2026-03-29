import mongoose from "mongoose";

const MONGODB_CS = process.env.MONGODB_CS

if(!MONGODB_CS) {
    throw new Error("Connection String is not defined");
}

const connectDB = async () => {
    if(mongoose.connection.readyState === 1) {
        console.log("Database is already connected");
        return;
    }
    
    try {
        await mongoose.connect(MONGODB_CS);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed:", error);
    }

}


export default connectDB;

