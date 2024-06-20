import { users } from "../Model/Users.js";
const postUser = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const institute = req.body.institute;
    const round = req.body.round;
    const password = req.body.password;
    const oScore = req.body.oScore;

    const user = new users({
      name: name,
      email: email,
      institute: institute,
      round: round,
      password: password,
      oScore: oScore,
    });

    user.save();
    return res.status(200).send({ status: 200 });
  };
};
export { postUser };
