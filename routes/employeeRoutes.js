import express from "express";
import passport from "../config/passport-local-startegy.js";
const router = express.Router();

import {
  createEmployee,
  createEmployeePage,
  deleteEmployee,
  editEmployee,
  editEmployeePage,
} from "../controller/employeeController.js";

// ------------------ Get requests ------------

router.get("/create", passport.checkAuthentication, createEmployeePage);
router.get(
  "/edit-employee/:id",
  passport.checkAuthentication,
  editEmployeePage
);

router.get("/delete/:id", passport.checkAuthentication, deleteEmployee);

// router.get("/review", passport.checkAuthentication, employeeReviewPage);

// ------------------- Posts Requests ----------
router.post("/create-employee", passport.checkAuthentication, createEmployee);
router.post("/edit/:id", passport.checkAuthentication, editEmployee);

export default router;
