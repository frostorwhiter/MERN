import mongoose from "mongoose";
const TeacherSchema = new mongoose.Schema(
  {
    teachername: {
      type: String,
      required: true,
    },
    teacherphoto: {
      type: [String],
    },
    group: {
      type: [String],
    },
    pidrozdil: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pidrozdil"

    }]
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", TeacherSchema);