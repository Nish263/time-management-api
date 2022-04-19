import mongoose from "mongoose";

const TaskListSchema = new mongoose.Schema({
  user:id {
    type: mongoose.Schema.Type.ObjectId,
    ref:"user",
    required: true,
  

  },
  task: {
    type: String,
    required: true,
    minLength: [3, "cannot be less than 3 character!!!"],
    maxLength: 30,
  },
  hr: {
    type: Number,
    required: true,
  },
});

const TaskList = mongoose.model("Task", TaskListSchema);
export default TaskList;
