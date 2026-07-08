import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://jagan:jagan123@cluster0.4givs0x.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected Successfully"));
}