import { users } from "../Model/Users.js";
const postUser = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const designation = req.body.designation;
    const institute = req.body.institute;
    const password = req.body.password;
    const round = req.body.round;
    const questions = req.body.questions;
    const ip = req.ip;
    const time = req.body.time;
    const oScore = req.body.oScore;

    const user = new users({
      name: name,
      email: email,
      designation: designation,
      institute: institute,
      password: password,
      round: round,
      questions: questions,
      time: time,
      ip: ip,
      oScore: oScore,
    });

    user.save();
    return res.status(200).send({ status: 200 });
  };
};
export { postUser };
