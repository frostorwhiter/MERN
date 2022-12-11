import Group from "../models/Group.js";

export const updateGroup = async (req,res,next)=>{
  try {
    const updatedGroup = await Group.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedGroup);
  } catch (err) {
    next(err);
  }
}
export const deleteGroup = async (req,res,next)=>{
  try {
    await Group.findByIdAndDelete(req.params.id);
    res.status(200).json("Group has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getGroup = async (req,res,next)=>{
  try {
    const Group = await Group.findById(req.params.id);
    res.status(200).json(group);
  } catch (err) {
    next(err);
  }
}
export const getGroups = async (req,res,next)=>{
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (err) {
    next(err);
  }
}
export const getGroupTeachers = async (req, res, next) => {
  try {
    const group = await Group.findById(req.params.id);
    const list = await Promise.all(
      Group.teachers.map((teacher) => {
        return Teacher.findById(teacher);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};