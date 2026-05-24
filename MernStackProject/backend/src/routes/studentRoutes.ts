import express from "express";

import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController";

const router = express.Router();

// GET
router.get("/", getStudents);

// POST
router.post("/", createStudent);

// PUT
router.put("/:id", updateStudent);

// DELETE
router.delete("/:id", deleteStudent);

export default router;