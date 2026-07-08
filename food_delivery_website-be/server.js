import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db.js";
import foodRouter from "./Routes/foodRoute.js";
import userRouter from "./Routes/userRoutes.js";
import 'dotenv/config';
import path from "path";
import cartRouter from "./Routes/cartRoute.js";
import orderRouter from "./Routes/orderRoute.js";

const __dirname = path.resolve();


//app config
const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//API endpoint

app.use("/api/food", foodRouter)
app.use("/images", express.static(path.join(__dirname, "/uploads")));
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)



app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server started Successfully on PORT ${port}`)
})