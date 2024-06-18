import mongoose from "mongoose";

const leaderboardSchema = mongoose.Schema(
  {
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
