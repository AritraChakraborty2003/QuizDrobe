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
    institute: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    round: {
      type: Number,
      require: true,
    },
    questions: {
      type: Number,
      require: true,
    },
    time: {
      type: Number,
      require: true,
    },
    ip: {
      type: String,
      require: true,
    },
    oScore: {
      type: Number,
      require: true,
    },
  },
  { Collection: "users" }
);

const users = mongoose.model("users", usersSchema);
export { users };
