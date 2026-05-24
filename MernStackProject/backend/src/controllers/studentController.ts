import { Request, Response } from "express";

import Student from "../models/Student";

// GET STUDENTS
export const getStudents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// CREATE STUDENT
export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// UPDATE STUDENT
export const updateStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// DELETE STUDENT
export const deleteStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Student Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};