import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    designation: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { Collection: "users" }
);

const users = mongoose.model("users", usersSchema);
export { users };
