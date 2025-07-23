import express from "express";
const router = express.Router();
import getAllHotelController from "../controller/getAllHotelController.js";

//get all hotels
router.get("/",getAllHotelController);

export default router;
