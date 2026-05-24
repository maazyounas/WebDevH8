import axios from "axios";

import type { Student } from "../types/student";

const API_URL =
  import.meta.env.VITE_API_URL ??
  "http://localhost:5000/api/students";

export const getStudents = async (): Promise<Student[]> => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const createStudent = async (
  studentData: Student
): Promise<Student> => {
  const response = await axios.post(
    API_URL,
    studentData
  );

  return response.data;
};

export const deleteStudent = async (
  id: string
): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
