import { sign, verify } from "jsonwebtoken";
// sign and verify token

const SECRET_KEY = process.env.SECRET_KEY;

export const signToken = (email: string): string => {
  if (!SECRET_KEY) throw new Error("SECRET_KEY is undefined");
  return sign({ email }, SECRET_KEY);
};

export const verifyToken = (token: string): any => {
  if (!SECRET_KEY) throw new Error("SECRET_KEY is undefined");
  return verify(token, SECRET_KEY);
};
