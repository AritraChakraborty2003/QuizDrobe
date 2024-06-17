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
    round: {
      type: Number,
      require: true,
    },
  },
  {
    collection: "scores",
  }
);

const scores = mongoose.model("scores", ScoreSchema);
export { scores };
