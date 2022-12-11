import Question from "../models/Question.js";
import Group from "../models/Group.js";
import Teacher from "../models/Teacher.js";
import { createError } from "../utils/error.js";

export const createQuestion = async (req, res, next) => {
  const groupId = req.params.groupid;
  const teacherId = req.params.teacherId
  const newQuestion = new Question(req.body);

  try {
    const savedQuestion = await newQuestion.save();
    try {
      await Group.findByIdAndUpdate(groupId, {
        $push: { questions: savedQuestion._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedQuestion);
  } catch (err) {
    next(err);
  }
};
export const updateQuestion = async (req, res, next) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedQuestion);
  } catch (err) {
    next(err);
  }
};
export const updateQuestionAvailability = async (req, res, next) => {
  try {
    await Question.updateOne(
      { "questionNumbers._id": req.params.id },
      {
        $push: {
          "questionNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Question status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteQuestion = async (req, res, next) => {
  const groupId = req.params.groupid;
  try {
    await Question.findByIdAndDelete(req.params.id);
    try {
      await Group.findByIdAndUpdate(groupId, {
        $pull: { questions: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Question has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getQuestion = async (req, res, next) => {
  try {
    const question = await Question.findById(req.params.id);
    res.status(200).json(question);
  } catch (err) {
    next(err);
  }
};
export const getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    next(err);
  }
};
export const getQuestionsByTeacher = async(req, res, next) =>{
  try {
    const questions = await Teacher.findById(req.params.teacherId).question;
    res.status(200).json(questions);
  }
    catch (err) {
    next(err);}
};