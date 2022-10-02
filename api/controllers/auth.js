import Group from "../models/Group.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newGroup = new Group({
      ...req.body,
      password: hash,
    });

    await newGroup.save();
    res.status(200).send("Group has been created.");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const group = await Group.findOne({ groupname: req.body.groupname });
    if (!group) return next(createError(404, "Group not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      group.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or groupname!"));

    const token = jwt.sign(
      { id: group._id, isAdmin: group.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = group._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
