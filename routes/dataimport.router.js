import express from "express";
import Hotel from "../model/hotel.model.js";
import hotels from "../data/hotels.js";

const router = express.Router();

// Route to import data
router.post("/", async (req, res) => {
  try {
    await Hotel.deleteMany({}); // Clear existing data before importing new data
    console.log("Importing data...");
    const hotelsInDb = await Hotel.insertMany(hotels.data);
    res.json(hotelsInDb)
  } catch (error) {
    console.error("Error importing data:", error);
    res.status(500).json({ message: "Error importing data" });
  }
});

export default router;
