import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";
import { handleError } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";

// controllers for auth

// constoller: register new user
export const register = async (req: Request, res: Response) => {
  try {
    const result = await registerNewUser(req.body);
    res.send(result);
  } catch (error) {
    handleError(res, "ERROR_REGISTER_USER", error);
  }
};

// controller: login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser({ email, password });
    const isUser = verifyToken(token);
    if (!isUser) return res.status(401).send("TOKEN_INVALID");
    res.send(token);
  } catch (error) {
    handleError(res, "ERROR_LOGIN_USER", error);
  }
};
