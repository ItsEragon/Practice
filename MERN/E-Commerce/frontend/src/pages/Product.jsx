import axios from 'axios'
import React, { useState } from 'react'

const Product = () => {

    const [image, setImage] = useState()
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    const [stock, setStock] = useState()

    function addProduct() {
        console.log(image);
        console.log(name);
        console.log(description);
        console.log(price);
        console.log(category);
        console.log(stock);
        axios.post("http://localhost:3000/create", {
            image,
            name,
            description,
            price,
            category,
            stock,
        })

    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-4">

                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Add New Product</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="Enter product image url"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="Enter product description"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="Enter product price"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="Enter product category"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                    <input
                        onChange={(e) => setStock(e.target.value)}
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                        placeholder="Enter product stock"
                        required
                    />
                </div>

                <button
                    onClick={addProduct}
                    type='submit'
                    className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                    Add Product
                </button>
            </div>
        </div>
    )
}

export default Product
