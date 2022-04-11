// const express = require("express");
import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8000;

// load modules here
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);
app.use("/", (req, res) => {
  res.json({
    message: "You have reached to the api of not to do list application",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running http://localhost:${PORT}`);
});
