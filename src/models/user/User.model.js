import UserSchema from "./User.schema.js";

export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

// get all user
export const getUser = () => {
  return UserSchema.find();
};

// get a user
export const getAUserByID = (_id) => {
  return UserSchema.findById(_id);
};

// delete user
export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};

export const updateUserPassword = ({ _id, newPassword }) => {
  return UserSchema.findByIdAndUpdate(
    _id,
    {
      Password: newPassword,
    },
    {
      new: true,
    }
  );
};
