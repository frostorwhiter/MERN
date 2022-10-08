import mongoose from "mongoose";
const GrouplSchema = new mongoose.Schema({
    groupname: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      question: {
        type: [String],
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );
export default mongoose.model("Group", GrouplSchema)