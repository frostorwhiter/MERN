import express from "express";
import {
  createTeacher,
  deleteTeacher,
  getTeacher,
  getTeachers,
  updateTeacher,
  updateTeacherAvailability,
} from "../controllers/teacher.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:pidrozdilid", verifyAdmin, createTeacher);

//UPDATE
router.put("/availability/:id", updateTeacherAvailability);
router.put("/:id", verifyAdmin, updateTeacher);
//DELETE
router.delete("/:id/:pidrozdilid", verifyAdmin, deleteTeacher);
//GET

router.get("/:id", getTeacher);
//GET ALL

router.get("/", getTeachers);

export default router;
