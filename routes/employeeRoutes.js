import express from "express";
import passport from "../config/passport-local-startegy.js";
const router = express.Router();

import {
  createEmployee,
  createEmployeePage,
  deleteEmployee,
} from "../controller/employeeController.js";

// ------------------ Get requests ------------
router.get("/create", passport.checkAuthentication, createEmployeePage);

router.get("/delete/:id", passport.checkAuthentication, deleteEmployee);

// ------------------- Posts Requests ----------
router.post("/create-employee", passport.checkAuthentication, createEmployee);

export default router;
