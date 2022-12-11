import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema(
  {
    Questiontitle: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    answer: {
      type: Number,
      required: false,
    },
    type:{
        type: String,
        required: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Question", QuestionSchema);