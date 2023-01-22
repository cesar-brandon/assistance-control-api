import { NextFunction, Request, Response } from "express";
import { handleError } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";

// Check session

export const checkSession = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization;
    if (!jwtByUser) return res.status(401).send("NOT_AUTHORIZED");
    const token = jwtByUser.split(" ")[1];
    const isUser = verifyToken(token);

    if (!isUser) return res.status(401).send("TOKEN_INVALID");
    next();
  } catch (error) {
    handleError(res, "ERROR_CHECK_SESSION", error);
  }
};
