import mongoose from "mongoose";

// 1. Create Schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
})

// 2. Create Model 
const userModel = mongoose.model("users", userSchema)

// 3. Export Model 
export default userModel