import { users } from "../Model/Users.js";
const PatchUsers = () => {
  return (req, res) => {
    const round = req.body.round;
    const questions = req.body.questions;

    const filter = { round: parseInt(round) - 1 };

    users
      .updateMany(
        {},
        { $set: { round: round, questions: parseInt(questions) } }
      )
      .then((res) => {
        console.log("Data updated", res);
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const PatchUsersID = () => {
  return (req, res) => {
    const email = req.body.email;
    const score = req.body.score;
    console.log(email);
    users
      .findOne({ email: email })
      .then((val) => {
        val.oScore += score;
        val.save();
      })
      .catch((err) => {
        console.log(err);
      });
    return res.status(200).send({ status: 200 });
  };
};

export { PatchUsers, PatchUsersID };
