import express from "express";
import categoriesController from "../controller/categoriesController.js";
const router = express.Router();

router.get("/",categoriesController )

export default router;