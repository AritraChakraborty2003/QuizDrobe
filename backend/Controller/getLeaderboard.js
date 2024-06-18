import { leaderboards } from "../Model/Leaderboard.js";
const getLeaderboard = (req, res) => {
  leaderboards
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getLeaderboard };
