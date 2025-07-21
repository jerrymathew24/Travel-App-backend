import express from "express";
import dotenv from "dotenv";
import hotelRouter from "./routes/hotel.router.js";
import connectDB from "./config/dbconfig.js";
import mongoose from "mongoose";

// Initialize the express app
const app = express();

app.use(express.json());
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello traveler");
});

app.use("/api/hotels", hotelRouter);


// Start the server
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => {
    console.log(`✅ Server started spinning on port ${PORT}`);
  });
});
