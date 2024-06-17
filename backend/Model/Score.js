import mongoose from "mongoose";

const ScoreSchema = mongoose.Schema(
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
    time: {
      type: Number,
      require: true,
    },
    score: {
      type: Number,
      require: true,
    },
  },
  {
    collection: "Score",
  }
);

const scores = mongoose.model("Score", ScoreSchema);
export { scores };
