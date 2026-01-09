import mongoose from "mongoose";

// 1. Create Schema
const productSchema = mongoose.Schema({
    image: String,
    name: String,
    description: String,
    price: Number,
    Category: String,
    stock: Number,
})

// 2. Create Model 
const productModel = mongoose.model("products", productSchema)

// 3. Export Model 
export default productModel