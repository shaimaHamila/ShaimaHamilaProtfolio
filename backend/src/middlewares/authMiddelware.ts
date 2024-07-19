import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1]; // Get token from "Bearer <token>"

    if (!process.env.TOKEN_SECRET) throw new Error("TOKEN_SECRET is undefined");

    jwt.verify(token, process.env.TOKEN_SECRET, (err: any) => {
      if (err) {
        console.log(err.message);
        return res.status(401).json({
          status: "fail",
          message: "Invalid token",
        });
      } else {
        next();
      }
    });
  } else {
    return res.status(401).json({
      status: "fail",
      message: "Token not provided",
    });
  }
};

export default requireAuth;
