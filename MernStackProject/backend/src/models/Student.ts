import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  course: string;
}

const studentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IStudent>(
  "Student",
  studentSchema
);