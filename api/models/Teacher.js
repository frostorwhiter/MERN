import mongoose from "mongoose";
const TeacherSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    group: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", TeacherSchema);