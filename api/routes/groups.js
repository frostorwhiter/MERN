import express from "express";
import {
  updateGroup,
  deleteGroup,
  getGroup,
  getGroups,
} from "../controllers/group.js";
import { verifyAdmin, verifyToken, verifyGroup } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyGroup, updateGroup);

//DELETE
router.delete("/:id", verifyGroup, deleteGroup);

//GET
router.get("/:id", verifyGroup, getGroup);

//GET ALL
router.get("/", verifyAdmin, getGroups);

export default router;
