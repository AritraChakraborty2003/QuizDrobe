import { users } from "../Model/Users.js";
const PatchUsers = () => {
  return (req, res) => {
    const round = req.body.round;
    const questions = req.body.questions;

    const filter = { round: { $lte: parseInt(round) } };

    users
      .updateMany(filter, { $set: { round, questions } })
      .then((res) => {
        console.log("Data updated", res);
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

    console.log("Item", email, score);
    try {
      const doc = users.findOne({ email: email });

      if (!doc) {
        return res.status(404).send("Document not found");
      }

      // Update the value by adding 10
      doc.value += 10;

      // Save the updated document
      doc.save();

      return res.status(200).send({ status: 200 });
    } catch (err) {
      console.log(err);
      return res.status(500);
    }
  };
};

export { PatchUsers, PatchUsersID };
