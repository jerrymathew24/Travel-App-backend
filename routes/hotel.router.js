import express from "express";
const router = express.Router();
import Hotel from "../model/hotel.model.js";

//get all hotels
router.get("/", async (req, res) => {
   try {
    const hotels = await Hotel.find({});
    hotels ? res.json(hotels) : res.status(404).json({ message: "No hotels found" });
   } catch (error) {
    console.log(error);
   }
});

export default router;
