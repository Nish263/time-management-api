import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    default: "",
    minLength: [5, "can't be less than 5 "],
    maxLength: 30,
  },
  Email: {
    type: String,
    required: true,
    default: "",
    minLength: 10,
    maxLength: 30,
  },
  Password: {
    type: String,
    required: true,
    default: "",
    minLength: [5, "minimum 5 character"],
    maxLength: [10, "max length 10 charaxter"],
  },
});
const UserList = mongoose.model("User", UserSchema);
export default UserList;
