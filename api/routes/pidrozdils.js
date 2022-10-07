import express from "express";
import {
    createPidrozdil,
    updatePidrozdil,
    deletePidrozdil,
    getPidrozdil,
    getPidrozdils,
    countByType,
    getPidrozdilTeachers,
  } from "../controllers/pidrozdil.js";
const router = express.Router();
import Pidrozdil from "../models/Pidrozdil.js";
import { verifyAdmin } from "../utils/verifyToken.js";

router.post("/", verifyAdmin, createPidrozdil);

//UPDATE
router.put("/:id",verifyAdmin, updatePidrozdil);
//DELETE
router.delete("/:id", verifyAdmin, deletePidrozdil);
//GET

router.get("/find/:id", getPidrozdil);
//GET ALL

router.get("/", getPidrozdils);
router.get("/countByType", countByType);
router.get("/teacher/:id", getPidrozdilTeachers);


export default router