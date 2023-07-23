import Employee from "../model/employeeSchema.js";

// render create student page
export const createEmployeePage = async function (req, res) {
  return res.render("add_student");
};

// create student
export const createEmployee = async function (req, res) {
  const { name, email, contactNumber, dob, isAdmin } = req.body;
  try {
    const employee = await Employee.findOne({ email });

    if (employee) {
      console.log("Email already exists");
      return res.redirect("back");
    }

    const newEmployee = await Employee.create({
      name,
      email,
      contactNumber,
      dob,
      isAdmin,
    });
    await newEmployee.save();

    return res.redirect("/");
  } catch (error) {
    console.log(`Error in creating employee: ${error}`);
    return res.redirect("back");
  }
};

// edit student
export const deleteEmployee = async function (req, res) {
  const { id } = req.params;
  try {
    // find the student using id in params
    const employee = await Employee.findById(id);

    // find the companies for which interview is scheduled
    // and delete student from company interviews list
    // if (student && student.interviews.length > 0) {
    //   for (let item of student.interviews) {
    //     const company = await Company.findOne({ name: item.company });
    //     if (company) {
    //       for (let i = 0; i < company.students.length; i++) {
    //         if (company.students[i].student.toString() === id) {
    //           company.students.splice(i, 1);
    //           company.save();
    //           break;
    //         }
    //       }
    //     }
    //   }
    // }
    await Employee.findByIdAndDelete(id);
    res.redirect("back");
  } catch (error) {
    console.log("Error in deleting student");
    return res.redirect("back");
  }
};

export const editEmployee = async function (req, res) {
  const { id } = req.params;
  try {
    // find the student using id in params
    const employee = await Employee.findById(id);

    const result = await Employee.updateOne(
      { _id: id } // The query to find the document you want to update
      //   { $set: updatedObject } // The new object or fields you want to update in the document
    );

    if (result.modifiedCount === 1) {
      console.log("Document updated successfully.");
      res.redirect("back");
    } else {
      console.log("Document not found or not updated.");
    }
  } catch (error) {
    console.log("Error in deleting student");
    return res.redirect("back");
  }
};
