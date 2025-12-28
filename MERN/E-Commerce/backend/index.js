import express from "express"
import dotenv from "dotenv"
dotenv.config()
import userModel from "./model/user.js"
import connectDB from "./config/db.js"
import bcrypt from "bcrypt"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
connectDB()

const port = 3000

// Making Api's
app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
        })
        res.json({
            message: "User registered!",
            data: user,
        })
    } catch (error) {
        console.log(error);
    }
})

app.post("/login", async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })

        if (user) {

            const comparePassword = await bcrypt.compare(req.body.password, user.password);

            if (comparePassword === false) {
                res.status(400).json({
                    message: "Invalid Credentials",
                })
            } else {
                res.json({
                    message: "Login Successful",
                    data: user,
                })
            }
        } else {
            res.status(404).json({
                message: "Invalid Credentials",
            })
        }


    } catch (error) {
        console.log(error);
    }
})

app.get("/getAllUsers", async (req, res) => {
    try {
        const users = await userModel.find()
        res.json({
            data: users,
        })
    } catch (error) {
        console.log(error);
    }
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
