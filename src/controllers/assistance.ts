import { Request, Response } from "express";
import {
  listAttendancesByStudent,
  updateAssistanceStatus,
} from "../services/assistance";
import { handleError } from "../utils/error.handle";

// get all attendances by student
export const getAttendancesByStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const attendances = await listAttendancesByStudent(id);
    res.send(attendances);
  } catch (error) {
    handleError(res, "ERROR_GET_ATTENDANCES", error);
  }
};

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
