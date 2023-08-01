import express from "express";
import passport from "passport";
import {
  addReview,
  deleteReview,
  editReview,
  editReviewPage,
  employeeReviewPage,
} from "../controller/reviewController.js";

const router = express.Router();

// -------- Get requests ----------
router.get("/allReviews", passport.checkAuthentication, employeeReviewPage);
router.get("/edit-review/:id", passport.checkAuthentication, editReviewPage);

router.get("/delete/:id", passport.checkAuthentication, deleteReview);

// -------- Post Requests ---------

router.post("/add-review", passport.checkAuthentication, addReview);
router.post("/edit/:id", passport.checkAuthentication, editReview);

export default router;
