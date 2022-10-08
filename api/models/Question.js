import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    type:{
        type: String,
        required: true,
    },
    answers:{
      type:Number,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Question", QuestionSchema);