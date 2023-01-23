import { IStudent } from "../interfaces/student";
import AssistanceModel from "../models/assistance";
import StudentModel from "../models/student";

// list all students
export const listStudents = async (): Promise<IStudent[]> => {
  const students = await StudentModel.findAll({
    include: [
      {
        model: AssistanceModel,
        limit: 1,
        order: [["createdAt", "DESC"]],
      },
    ],
  });
  return students;
};

// list students by id
export const listStudentById = async (id: number): Promise<IStudent> => {
  const student = await StudentModel.findByPk(id);

  if (!student) throw new Error("STUDENT_NOT_FOUND");

  return student;
};

// updated student
export const updateStudent = async (
  id: number,
  student: IStudent
): Promise<IStudent> => {
  const studentUpdated = await StudentModel.update(student, {
    where: { id },
  });

  if (!studentUpdated) throw new Error("STUDENT_NOT_UPDATED");

  return student;
};
