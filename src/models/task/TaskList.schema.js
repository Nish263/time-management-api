import mongoose from "mongoose";

const TaskListSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    default: "",
    minLength: 3,
    maxLength: 30,
  },
  hr: {
    type: Number,
    required: true,
  },
});

const TaskList = mongoose.model("Task", TaskListSchema);
export default TaskList;
