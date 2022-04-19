import TaskListSchema from "./TaskList.schema.js";

//insert a task
export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};

//read all task
export const getTasks = () => {
  return TaskListSchema.find();
};
//delete a task
export const deleteTask = (_id) => {
  return TaskListSchema.findByIdAndDelete(_id);
  // return TaskListSchema.findOneAndRemove({ _id });
};
