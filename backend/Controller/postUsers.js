import { users } from "../Model/Users.js";
const postUser = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const designation = req.body.designation;
    const password = req.body.password;
    const round = req.body.round;
    const questions = req.body.questions;

    const user = new users({
      name: name,
      email: email,
      designation: designation,
      password: password,
      round: round,
      questions: questions,
    });

    user.save();
    return res.status(200).send({ status: 200 });
  };
};
export { postUser };
