import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
// import * as bcrypt from "bcrypt";

const createToken = (id: string) => {
  if (!process.env.TOKEN_SECRET) throw new Error("TOKEN_SECRET is undefined");
  return jwt.sign({ user: id }, process.env.TOKEN_SECRET, {
    expiresIn: "3d",
  });
};

export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;
  try {
    if (!userName || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }
    const admin = await Admin.findOne({ userName });
    if (admin) {
      //   const auth = bcrypt.compareSync(password, admin.password);
      const auth = password == admin.password;
      if (auth) {
        const token = createToken(admin._id.toString());
        return res.status(200).json({
          success: true,
          data: { admin: admin, token: token },
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "Admin not exist",
      });
    }
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Incorrect userName or password" });
  }
};
