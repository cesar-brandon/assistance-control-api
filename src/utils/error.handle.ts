import { Response } from "express";

export const handleError = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500).json({
    ok: false,
    error,
  });
};
