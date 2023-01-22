import { Router, Request, Response } from "express";
import {
  getStudentById,
  getStudents,
  putStudent,
} from "../controllers/student";
import { checkSession } from "../middlewares/session";

const router = Router();

// GET: /students
router.get("/", checkSession, getStudents);
// GET: /students/:id
router.get("/:id", getStudentById);
// PUT: /students/:id
router.put("/:id", putStudent);

export { router };
