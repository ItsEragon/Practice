import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:3000/login", {
                email,
                password,
            })
            toast.success('Successfully logged in!')
            console.log(data);
            // if (response.data.data) {
            //     toast.success('Successfully logged in!')
            //     // navigate('/'); // Navigate to home or dashboard
            // } else {
            //     toast.error("User not found")
            // }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Log In</h2>

                <form onSubmit={(e) => submit(e)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div> */}

                    <button
                        type='submit'
                        className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                        Log In
                    </button>
                    <div>
                        <div className='text-center text-sm text-gray-600'>OR</div>
                        <button className="mt-4 w-full  text-gray-600 hover:bg-gray-100 font-medium py-2.5 rounded-lg border transition-colors cursor-pointer">
                            Continue with Google
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?
                    <Link to="/" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
