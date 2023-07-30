import express from "express";
import passport from "passport";
import {
  addReview,
  employeeReviewPage,
} from "../controller/reviewController.js";

const router = express.Router();

// -------- Get requests ----------
router.get("/allReviews", passport.checkAuthentication, employeeReviewPage);

// -------- Post Requests ---------

router.post("/add-review", passport.checkAuthentication, addReview);
// router.post("/update-status/:id", passport.checkAuthentication, updateStatus);

export default router;
