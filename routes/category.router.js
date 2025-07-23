import express from "express";
import categoryController from "../controller/categoryController.js";
const router = express.Router();

router.get("/", categoryController)

export default router;