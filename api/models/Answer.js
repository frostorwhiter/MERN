import mongoose from "mongoose";
const AnswerSchema = new mongoose.Schema(
  {
    QuestionId:{
        type: String,
        required: false,
    },
    TeacherId:{
      type:Number,
      required: false,
    },
    Answer: {
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Answer", AnswerSchema);