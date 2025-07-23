import express from "express";
const router = express.Router();
import signupController from "../controller/signupController.js";
import loginController from "../controller/loginController.js";



router.post("/register",signupController);
router.post("/login",loginController)


export default router;
