import express from "express";
import {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestion,
  } from "../controllers/question.js";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";

router.post("/", verifyAdmin, createQuestion);

//UPDATE
router.put("/:id",verifyAdmin, updateQuestion);
//DELETE
router.delete("/:id", verifyAdmin, deleteQuestion);
//GET

router.get("/find/:id", getQuestion);
//GET ALL


export default router