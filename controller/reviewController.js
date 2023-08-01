import mongoose from "mongoose";
import Employee from "../model/employeeSchema.js";
import Review from "../model/reviewSchema.js";
import { ObjectId } from "mongodb";

// render create employee review page
export const employeeReviewPage = async function (req, res) {
  try {
    const employee = await Employee.find({});
    const reviews = await Review.find({})
      .populate("employee_id")
      .populate("reviewer");
    console.log("reviews", reviews);

    return res.render("review", {
      employee,
      message: req.flash("message"),
      reviews,
    });
  } catch (error) {
    console.log(`Error in rendering page: ${error}`);
    return res.redirect("back");
  }
};

// render edit review page
export const editReviewPage = async function (req, res) {
  const { id } = req.params;

  const objectId = new ObjectId(id);
  const review = await Review.findOne({ _id: objectId });
  console.log("id", id);
  console.log("reviews", review);

  return res.render("edit_review", { review });
};

//add review to a employee performance
export const addReview = async function (req, res) {
  const { employee_id, rating, feedback, reviewer } = req.body;

  const empId = new ObjectId(employee_id);

  // console.log(req.body);
  const payload = {
    employee_id: empId,
    rating,
    feedback: feedback.trim(),
    reviewer: new ObjectId(reviewer),
  };
  console.log("payload======>", payload);
  try {
    const query = { [employee_id]: empId };
    // const existemployeeReview = await Review.findOne(query);
    const existemployeeReview = await Review.find({});

    console.table("employee review", existemployeeReview);
    const newReview = await Review.create(payload);
    await newReview.save();
    console.log("Review added Successfully");
    req.flash("message", "Review added Successfully");
    return res.redirect("back");
  } catch (error) {
    console.log(`Error in adding Review: ${error}`);
    return res.redirect("/");
  }
};

//delete review to a employee performance
export const deleteReview = async function (req, res) {
  const { id } = req.params;
  console.log("id to delete review", id);

  try {
    // find the review using id in params
    const employee = await Review.findById(id);

    await Review.findByIdAndDelete(id);
    req.flash("message", "review deleted sucessfully");
    res.redirect("back");
  } catch (error) {
    console.log("Error in deleting review");
    return res.redirect("back");
  }
};

export const editReview = async function (req, res) {
  const { id } = req.params;
  console.log("body edit", req.body);
  const { employee_id, rating, feedback, reviewer } = req.body;

  const revId = new ObjectId(employee_id);

  // console.log(req.body);
  const payload = {
    employee_id: revId,
    rating,
    feedback: feedback.trim(),
    reviewer: new ObjectId(reviewer),
  };
  console.log("payload======>", payload);

  try {
    const objectId = new ObjectId(id);
    const result = await Review.updateOne(
      { _id: objectId },
      { $set: req.body }
    );

    console.log(`review updated sucessffully`);
    req.flash("message", "review updated sucessfully");
    res.redirect("/reviews/allReviews");
  } catch (error) {
    console.error("Error updating document:", error);
    res.redirect("back");
  }
};
