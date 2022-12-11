import Teacher from "../models/Teacher.js";
import Pidrozdil from "../models/Pidrozdil.js";
import Group from "../models/Group.js"
import { createError } from "../utils/error.js";

export const createTeacher = async (req, res, next) => {
  const pidrozdilId = req.params.pidrozdilid;
  const newTeacher = new Teacher(req.body);

  try {
    const savedTeacher = await newTeacher.save();
    try {
      await Pidrozdil.findByIdAndUpdate(pidrozdilId, {
        $push: { teachers: savedTeacher._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedTeacher);
  } catch (err) {
    next(err);
  }
};

export const updateTeacher = async (req, res, next) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTeacher);
  } catch (err) {
    next(err);
  }
};
export const updateTeacherAvailability = async (req, res, next) => {
  try {
    await Teacher.updateOne(
      { "teacherNumbers._id": req.params.id },
      {
        $push: {
          "teacherNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Teacher status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteTeacher = async (req, res, next) => {
  const pidrozdilId = req.params.pidrozdilid;
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    try {
      await Pidrozdil.findByIdAndUpdate(pidrozdilId, {
        $pull: { teachers: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Teacher has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.status(200).json(teacher);
  } catch (err) {
    next(err);
  }
};
export const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (err) {
    next(err);
  }
};
export const getTeachersGroup = async (req, res, next) => {
  try {
    const Teacher = await Teacher.findById(req.params.id);
    const list = await Promise.all(
      Teacher.groups.map((group) => {
        return Group.findById(group);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};