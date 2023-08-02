import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    employee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // students: [
    //   {
    //     student: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Student",
    //     },
    //     date: {
    //       type: Date,
    //       required: true,
    //     },
    //     result: {
    //       type: String,
    //       enum: [
    //         "On Hold",
    //         "Selected",
    //         "Pending",
    //         "Not Selected",
    //         "Did not Attempt",
    //       ],
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
