import mongoose from "mongoose";
const TeacherSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },
    teacherNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", TeacherSchema);