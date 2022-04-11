import express from "express";
const router = express.Router();

const fakeTasks = [];

// API end points
//task api and end points
router.get("/", (req, res) => {
  //replace the faketasks with the real one from database

  res.json({
    status: "success",
    message: "your new task had been added",
    tasks: fakeTasks,
  });
});

router.post("/", (req, res) => {
  fakeTasks.push(req.body);
  res.json({
    status: "success",
    message: "you made a post call",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "you made a delete call",
  });
});

export default router;
