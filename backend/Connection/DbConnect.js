import mongoose from "mongoose";
const DBConnectFunction = (url) => {
  mongoose.connect(url);
  console.log("MongoDB Connected");
};

export default DBConnectFunction;
