import mongoose from "mongoose";

const leaderboardSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    show: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "leaderboards",
  }
);

const leaderboards = mongoose.model("leaderboards", leaderboardSchema);
export { leaderboards };
