import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js"
import authRoutes from "./routes/authRoutes.js";
const app = express()

const PORT = 5000

app.get("/",(req,res) => {
    res.send("Movie API is running")
})

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`)
})

app.use("/movies", movieRoutes);

app.use(express.json());
app.use("/auth", authRoutes);

dotenv.config()
connectDB()