import { Request, Response } from "express";
import {
  listStudentById,
  listStudents,
  updateStudent,
} from "../services/student";
import { handleError } from "../utils/error.handle";

// get all students
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await listStudents();
    res.send(students);
  } catch (error) {
    handleError(res, "ERROR_GET_STUDENTS", error);
  }
};

// get student by id
export const getStudentById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const student = await listStudentById(id);
    res.send(student);
  } catch (error) {
    handleError(res, "ERROR_GET_STUDENT_BY_ID", error);
  }
};

// put student by id
export const putStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const student = req.body;

    const studentUpdated = await updateStudent(id, student);
    res.send(studentUpdated);
  } catch (error) {
    handleError(res, "ERROR_PUT_STUDENT", error);
  }
};
