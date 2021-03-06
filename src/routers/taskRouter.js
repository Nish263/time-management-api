import express from "express";
const router = express.Router();
import {
  getTasks,
  insertTask,
  deleteTask,
} from "../models/task/TaskList.model.js";

// API end points
//task api and end points
router.get("/", async (req, res) => {
  //replace the faketasks with the real one from database

  const result = await getTasks();
  res.json({
    status: "success",
    message: "your new task had been added",
    result,
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "you made a post call",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await deleteTask(_id);
    console.log(result);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "The ticket has been deleted",
        result,
      });
    }
    res.json({
      status: "success",
      message: "There is nothing to delete",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "you made a delete call",
      result,
    });
  }
});

export default router;
