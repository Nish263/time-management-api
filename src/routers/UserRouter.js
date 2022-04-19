import express from "express";
import {  insertUser, deleteUser, getAUserByID, updateUserPassword } from "../models/user/User.model.js";
const router = express.Router();

// router.get("/", async (req, res) => {
//   const result = await getUser();
//   res.json({
//     status: "success",
//     message: "new user added",
//     result,
//   });
// });


router.get("/:_id?", async (req, res)=>{
    const {_id} =req.params;
    const result = _id ? await getAUserByID() : await getUser();
    res.json({
        status:"success",
       result,
    });
});
router.post("/", async (req, res) => {
  try {
    const result = await insertUser(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: " succesful post call",
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
    const result = await deleteUser(_id);
    console.log(result);

    if (result?._id) {
      return res.json({
        status: "success",
        message: " user deleted",
        result,
      });
    }
    res.json({
      status: "success",
      message: " nothing to delete",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  };



router.patch("/" , async (req, res)=> {
console.log(req.body);
const result= await updateUserPassword(req.body);
    res.json({
       status:"success",
       result,
    });

});

export default router;
