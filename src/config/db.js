import mongoose from "mongoose";

const mongoClient = () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_URL);

    if (connection) {
      console.log("MongoDB is connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient;
