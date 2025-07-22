import express from "express";
const router = express.Router();
import Hotel from "../model/hotel.model.js";

//get all hotels
router.get("/", async (req, res) => {
  const hotelCategory = req.query.category;
  try {
    let hotels;
    if (hotelCategory) {
      hotels = await Hotel.find({ category: hotelCategory });
      console.log(`Fetching hotels in category: ${hotelCategory}`);
    } else {
      hotels = await Hotel.find({});
    }
    hotels
      ? res.json(hotels)
      : res.status(404).json({ message: "No hotels found" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
