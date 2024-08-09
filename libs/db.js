import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URL;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in .env file");
        }
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error("Error connecting to MongoDB:", e);
    }
};

export default connectDB;
