import { useEffect, useState } from "react";

import type { Student } from "../types/student";

interface Props {
  addStudent: (student: Student) => Promise<void>;
  editStudent: (student: Student) => Promise<void>;
  editingStudent: Student | null;
  onCancelEdit: () => void;
}

const emptyFormData: Student = {
  name: "",
  email: "",
  course: "",
};

const StudentForm = ({
  addStudent,
  editStudent,
  editingStudent,
  onCancelEdit,
}: Props) => {
  const [formData, setFormData] = useState<Student>({
    ...emptyFormData,
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
      return;
    }

    setFormData(emptyFormData);
  }, [editingStudent]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (editingStudent) {
      await editStudent(formData);
      return;
    }

    await addStudent(formData);
    setFormData(emptyFormData);
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

      <div className="flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>

        {editingStudent ? (
          <button
            type="button"
            onClick={onCancelEdit}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default StudentForm;
