import express from "express";
import {
    createPidrozdil,
    updatePidrozdil,
    deletePidrozdil,
    getPidrozdil,
  } from "../controllers/pidrozdil.js";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";

router.post("/", verifyAdmin, createPidrozdil);

//UPDATE
router.put("/:id",verifyAdmin, updatePidrozdil);
//DELETE
router.delete("/:id", verifyAdmin, deletePidrozdil);
//GET

router.get("/find/:id", getPidrozdil);
//GET ALL


export default router