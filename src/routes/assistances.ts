import { Router } from "express";
import {
  getAttendancesByStudent,
  putAssistance,
} from "../controllers/assistance";
import { checkSession } from "../middlewares/session";

const router = Router();

// GET: /assistance
router.get("/:id", checkSession, getAttendancesByStudent);
// PUT: /assistance
router.put("/", checkSession, putAssistance);

export { router };
