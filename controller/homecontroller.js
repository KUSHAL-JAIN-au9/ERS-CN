import Employee from "../model/employeeSchema.js";

// render home page
export const homePage = async function (req, res) {
  const employee = await Employee.find({});
  return res.render("home", { employee });
};
