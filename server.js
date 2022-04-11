// const express = require("express");
import express from "express";
const app = express();

const PORT = 8000;

// API end points
app.get("/api/v1/", (req, res) => {
  res.json({
    message: "welcome to  the application",
  });
});
app.use("/", (req, res) => {
  //   const person = {
  //     name: "nisha",
  //     lastName: "pandey",
  //   };
  res.json({
    message: "You have reached to the api of not to do list application",
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running http://localhost:${PORT}`);
});
