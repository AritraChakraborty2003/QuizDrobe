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
    Collection: "Rounds",
  }
);
const rounds = mongoose.model("Rounds", roundSchema);
export { rounds };
