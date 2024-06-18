import { attempts } from "../Model/Attempted.js";

const PostAttempts = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const round = req.body.round;
    const attempted = req.body.attempted;

    const attemptsObj = new attempts({
      name: name,
      email: email,
      round: round,
      attempted: attempted,
    });

    attemptsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { PostAttempts };
