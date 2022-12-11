import Answer from "../models/Answer.js";
import { createError } from "../utils/error.js";

export const createAnswer = async (req, res, next) => {
  const newAnswer = new Answer(req.body);

  try {
    const savedAnswer = await newAnswer.save();
    res.status(200).json(savedAnswer);
  } catch (err) {
    next(err);
  }
};

export const createAnswers = async (req, res, next) => {
    const newAnswers = new [Answer(req.body)];
  //Find a way to create array
    try {
      Answer.insertMany(newAnswers);
      res.status(200).json(savedAnswer);
    } catch (err) {
      next(err);
    }
  };

export const deleteAnswer = async (req, res, next) => {
  const pidrozdilId = req.params.pidrozdilid;
  try {
    await Answer.findByIdAndDelete(req.params.id);
    try {
      await Pidrozdil.findByIdAndUpdate(pidrozdilId, {
        $pull: { Answers: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Answer has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getAnswer = async (req, res, next) => {
  try {
    const Answer = await Answer.findById(req.params.id);
    res.status(200).json(Answer);
  } catch (err) {
    next(err);
  }
};

export const getAnswersByTeacher = async (req, res, next) => {
    try {
      const Answers = await Answer.find({TeacherId: req.TeacherId});
      res.status(200).json(Answers);
    } catch (err) {
      next(err);
    }
  };

export const getAnswers = async (req, res, next) => {
  try {
    const Answers = await Answer.find();
    res.status(200).json(Answers);
  } catch (err) {
    next(err);
  }
};