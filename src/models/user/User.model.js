import UserSchema from "./User.schema.js";

export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

export const getUser = () => {
  return UserSchema.find();
};

export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
