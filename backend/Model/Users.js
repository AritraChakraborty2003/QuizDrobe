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

    oScore: {
      type: Number,
      require: true,
    },
  },
  { Collection: "users" }
);

const users = mongoose.model("users", usersSchema);
export { users };
