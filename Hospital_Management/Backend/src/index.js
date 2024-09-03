import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db/db.js"
import doctorRouter from "./routes/doctorroute.js"
import patientRouter from "./routes/patientroute.js"
dotenv.config({
    path:"./.env",
})

//app config
const app = express()
const port=4000


//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/doctorRouter",doctorRouter);
// app.use("/api/patientRouter",patientRouter);
app.get("/",(req,res) => {
    res.send("API Working");
})

app.listen(port,() => {
    console.log(`Server Started on http://localhost:${port}`)
})