import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://tester:Najib2025@cluster0.ywcoens.mongodb.net/BlogApp');
   
}