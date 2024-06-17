import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    round: {
      type: String,
      require: true,
    },
    star1: {
      type: String,
      require: true,
    },
    test1: {
      type: String,
      require: true,
    },
    starp: {
      type: String,
      require: true,
    },
    testp: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "Feedback",
  }
);
const Feedback = mongoose.model("Feedback", feedbackSchema);
export { Feedback };
