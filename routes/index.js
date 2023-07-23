import express from "express";
import passport from "passport";

import userRoutes from "./userRoutes.js";
import employeeRoutes from "./employeeRoutes.js";
import { homePage } from "../controller/homecontroller.js";

const router = express.Router();

router.get("/", passport.checkAuthentication, homePage);
router.use("/users", userRoutes);
router.use("/students", employeeRoutes);

export default router;
