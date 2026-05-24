import { useEffect, useState } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import type { Student } from "./types/student";

import {
  getStudents,
  createStudent,
  deleteStudent,
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    let isMounted = true;

    void getStudents().then((data) => {
      if (isMounted) {
        setStudents(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const addStudent = async (student: Student) => {
    const newStudent = await createStudent(student);

    setStudents((currentStudents) => [
      ...currentStudents,
      newStudent,
    ]);
  };

  const removeStudent = async (id: string) => {
    await deleteStudent(id);

    setStudents((currentStudents) =>
      currentStudents.filter(
        (student) => student._id !== id
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Student Management System
        </h1>

        <StudentForm addStudent={addStudent} />

        <StudentList
          students={students}
          removeStudent={removeStudent}
        />
      </div>
    </div>
  );
}

export default App;
