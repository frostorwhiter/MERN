import Pidrozdil from "../models/Pidrozdil.js";
import Teacher from "../models/Teacher.js";

export const createPidrozdil = async (req, res, next) => {
  const newPidrozdil = new Pidrozdil(req.body);

  try {
    const savedPidrozdil = await newPidrozdil.save();
    res.status(200).json(savedPidrozdil);
  } catch (err) {
    next(err);
  }
};
export const updatePidrozdil = async (req, res, next) => {
  try {
    const updatedPidrozdil = await Pidrozdil.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPidrozdil);
  } catch (err) {
    next(err);
  }
};
export const deletePidrozdil = async (req, res, next) => {
  try {
    await Pidrozdil.findByIdAndDelete(req.params.id);
    res.status(200).json("Pidrozdil has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getPidrozdil = async (req, res, next) => {
  try {
    const pidrozdil = await Pidrozdil.findById(req.params.id);
    res.status(200).json(pidrozdil);
  } catch (err) {
    next(err);
  }
};
export const getPidrozdils = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const pidrozdils = await Pidrozdil.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(Pidrozdils);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const pidrozdilCount = await Pidrozdil.countDocuments({ type: "pidrozdil" });
    res.status(200).json([
      { type: "Pidrozdil", count: PidrozdilCount },

    ]);
  } catch (err) {
    next(err);
  }
};

export const getPidrozdilTeachers = async (req, res, next) => {
  try {
    const pidrozdil = await Pidrozdil.findById(req.params.id);
    const list = await Promise.all(
      pidrozdil.teachers.map((teacher) => {
        return Teacher.findById(teacher);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
