import type { Student } from "../types/student";

interface Props {
  students: Student[];
  removeStudent: (id: string) => Promise<void>;
  onEdit: (student: Student) => void;
}

const StudentList = ({
  students,
  removeStudent,
  onEdit,
}: Props) => {
  return (
    <div className="mt-6">
      {students.map((student) => (
        <div
          key={student._id}
          className="bg-white p-4 rounded shadow mb-3 flex items-center justify-between gap-4"
        >
          <div>
            <h2 className="font-bold">{student.name}</h2>
            <p>{student.email}</p>
            <p>{student.course}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(student)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => removeStudent(student._id!)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
