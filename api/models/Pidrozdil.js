import mongoose from "mongoose";
const PidrozdilSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Pidrozdil", PidrozdilSchema)