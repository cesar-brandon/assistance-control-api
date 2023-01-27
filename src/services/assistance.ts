import AssistanceModel from "../models/assistance";

// get all attendances by student
export const listAttendancesByStudent = async (idStudent: string) => {
  const attendances = await AssistanceModel.findAll({
    where: {
      idStudent,
    },
  });
  return attendances;
};

// updated assistance status
export const updateAssistanceStatus = async (
  idStudent: number,
  status: string
) => {
  const lastAssistance = await AssistanceModel.findOne({
    where: { idStudent },
    order: [["createdAt", "DESC"]],
  });

  if (!lastAssistance) return false;

  const assistance = await AssistanceModel.update(
    {
      status,
    },
    {
      where: { id: lastAssistance.id },
    }
  );
  return assistance;
};
