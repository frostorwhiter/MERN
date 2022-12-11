import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js"
import groupsRoute from "./routes/groups.js"
import pidrozdilsRoute from "./routes/pidrozdils.js"
import teachersRoute from "./routes/teachers.js"
import questionsRoute from "./routes/questions.js"

import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/groups", groupsRoute);
app.use("/api/pidrozdils", pidrozdilsRoute);
app.use("/api/teachers", teachersRoute);
app.use("/api/questions", questionsRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
