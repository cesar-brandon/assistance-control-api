import { Request, Response } from "express";
import { updateAssistanceStatus } from "../services/assistance";
import { handleError } from "../utils/error.handle";

// put assistance by id
export const putAssistance = async (req: Request, res: Response) => {
  try {
    const { id, status } = req.body;
    const assistanceUpdated = await updateAssistanceStatus(id, status);
    res.status(200).json({
      ok: true,
      assistanceUpdated,
    });
  } catch (error) {
    handleError(res, "ERROR_PUT_ASSISTANCE", error);
  }
};
