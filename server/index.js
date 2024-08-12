import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import route from "./router/userRouter.js"
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const URL = process.env.URL;
const PORT = 8000;
mongoose.connect(URL)
.then(()=>{console.log("Mongoose Connection Established")})
.then(() => {app.listen(PORT)})
.then(()=>{console.log("App listening on port 8000")})
.catch(error => console.log(error))

app.use("/api",route);
// app.use("/",(req,res) => {return res.status(200).json("Hello world")});