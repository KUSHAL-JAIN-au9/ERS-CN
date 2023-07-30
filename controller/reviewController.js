import mongoose from "mongoose";
import Employee from "../model/employeeSchema.js";
import Review from "../model/reviewSchema.js";
import { ObjectId } from "mongodb";

// render create employee review page
export const employeeReviewPage = async function (req, res) {
  try {
    const employee = await Employee.find({});

    return res.render("review", { employee });
  } catch (error) {
    console.log(`Error in rendering page: ${error}`);
    return res.redirect("back");
  }
};

//add review to a employee performance
export const addReview = async function (req, res) {
  const { employee_id, rating, feedback, reviewer } = req.body;

  const empId = new ObjectId(employee_id);

  console.log(req.body);
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
    return res.redirect("back");
  } catch (error) {
    console.log(`Error in adding Review: ${error}`);
    return res.redirect("back");
  }
};
