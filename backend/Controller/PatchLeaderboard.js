import { leaderboards } from "../Model/Leaderboard.js";
const PatchLeaderboard = () => {
  return (req, res) => {
    const show = req.body.show;
    const email = `${process.env.VALID_EMAIL}`;
    /*console.log(show);
    console.log(email);*/
    leaderboards
      .findOne({ email: email })
      .then((doc) => {
        console.log(doc.show);
        doc.show = show;

        doc.save();
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(200).send({ status: 200 });
  };
};
export { PatchLeaderboard };
