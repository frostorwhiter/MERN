import express from "express";
import {
  createAnswer,
  createAnswers,
  deleteAnswer,
  getAnswer,
  getAnswers,
  getAnswersByTeacher,
} from "../controllers/answer.js";
import { verifyAdmin, } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", createAnswer);
router.post("/", createAnswers);
//DELETE
router.delete("/:id/", verifyAdmin, deleteAnswer);
//GET
router.get("/find/:id", getAnswer);
//GET ALL
router.get("/find", getAnswers);
router.get("/find/:id", getAnswersByTeacher);

export default router;
