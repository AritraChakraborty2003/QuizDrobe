import { users } from "../Model/Users.js";
const PatchUsers = () => {
  return (req, res) => {
    const round = req.body.round;
    const questions = req.body.questions;

    const roundVal = parseInt(round);
    const qval = parseInt(questions);

    users
      .find({})
      .then((val) => {
        val.map((data) => {
          data.round = roundVal;
          data.questions = qval;

          data.save();
        });
      })
      .catch((err) => {
        console.log(err);
      });
    return res.status(200).send({ status: 200 });
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
