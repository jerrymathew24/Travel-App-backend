import express from "express";
import singleHotelController from "../controller/singleHotelController.js";
const router = express.Router();

router.get("/:id",singleHotelController)
export default router;