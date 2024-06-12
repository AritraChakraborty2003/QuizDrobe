import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
    },

    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { Collection: "admin" }
);

const adminObj = mongoose.model("admin", adminSchema);
export { adminObj };
