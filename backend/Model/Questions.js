import mongoose from "mongoose";

const questionsSchema = mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
    },

    round: {
      type: String,
      require: true,
    },
    question: {
      type: String,
      require: true,
    },
    option1: {
      type: String,
      require: true,
    },
    option2: {
      type: String,
      require: true,
    },
    option3: {
      type: String,
      require: true,
    },
    option4: {
      type: String,
      require: true,
    },
    correct: {
      type: String,
      require: true,
    },
  },
  { Collection: "questions" }
);

const question = mongoose.model("questions", questionsSchema);
export { question };