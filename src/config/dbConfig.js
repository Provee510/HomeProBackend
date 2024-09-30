import mongoose from 'mongoose';

// Connect to MongoDB
export const connectDB =(url)=>{
    mongoose
    .connect(url)
    .then(()=>console.log('DB connected successfully'))
    .catch(err=>console.error("Error connecting to DB:", err.messsage));
};