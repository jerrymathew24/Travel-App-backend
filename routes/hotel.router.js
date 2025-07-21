import express from "express";
const router = express.Router();
import hotels from "../data/hotels.js";

//get all hotels
router.get("/", (req, res) => {
  res.json(hotels.data);
});

export default router;
