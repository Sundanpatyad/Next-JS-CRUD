import mongoose from "mongoose";



const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://user1:xyz123abc@cluster0.vrj0gwa.mongodb.net/NEXT_CRUD?retryWrites=true&w=majority&appName=Cluster0&tls=true")
        console.log("Connected")
    }catch(e){
        console.log(e);
    }
}

export default connectDB;