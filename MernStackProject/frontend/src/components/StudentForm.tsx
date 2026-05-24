import { useState } from "react";

import type { Student } from "../types/student";

interface Props {
  addStudent: (student: Student) => Promise<void>;
}

const StudentForm = ({ addStudent }: Props) => {
  const [formData, setFormData] = useState<Student>({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    void addStudent(formData);

    setFormData({
      name: "",
      email: "",
      course: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
