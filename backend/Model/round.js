import mongoose from "mongoose";
const roundSchema = mongoose.Schema(
  {
    round: {
      type: Number,
      require: true,
    },
    questions: {
      type: Number,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "rounds",
  }
);
const rounds = mongoose.model("rounds", roundSchema);
export { rounds };
