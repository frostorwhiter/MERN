import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema(
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
    type:{
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Question", QuestionSchema);