import mongoose from "mongoose";

const AttemptSchema = mongoose.Schema(
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
    attmpted: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "attempts",
  }
);

const attempts = mongoose.model("attempts", AttemptSchema);
export { attempts };
