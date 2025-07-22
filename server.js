import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";
import mongoose from "mongoose";
import hotelDataAddedToDBRouter from "./routes/dataimport.router.js";
import categoryDataAddedToDBRouter from "./routes/categoryimport.router.js";

import hotelRouter from "./routes/hotel.router.js";
import categoryRouter from "./routes/category.router.js";
import singleHotelRouter from "./routes/singlehotel.router.js";
import authRouter from "./routes/auth.router.js";

// Initialize the express app
const app = express();

app.use(express.json());
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello traveler");
});

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);


// Start the server
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => {
    console.log(`✅ Server started spinning on port ${PORT}`);
  });
});
