import express from "express";
import {
  updateGroup,
  deleteGroup,
  getGroup,
  getGroups,
} from "../controllers/group.js";
import { verifyAdmin, verifyToken, verifyGroup } from "../utils/verifyToken.js";

const router = express.Router();
router.get("/checkauthentication", verifyToken, (req,res,next)=>{
 res.send("hello user, you are logged in")
})
  
router.get("/checkuser/:id", verifyGroup, (req,res,next)=>{
 res.send("hello user, you are logged in and you can delete your account")
})
  
router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
 res.send("hello admin, you are logged in and you can delete all accounts")
})
//UPDATE
router.put("/:id", verifyGroup, updateGroup);

//DELETE
router.delete("/:id", verifyGroup, deleteGroup);

//GET
router.get("/:id", verifyGroup, getGroup);

//GET ALL
router.get("/", verifyAdmin, getGroups);

export default router;
