import User from "../userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        message: "user already exist",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    //create user

    const user = await User.create({
      name,
      email,
    });
  } catch (error) {}
};
