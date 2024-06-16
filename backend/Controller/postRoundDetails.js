import { rounds } from "../Model/round.js";
const postRoundDetails = () => {
  return (req, res) => {
    const round = req.body.round;
    const questions = req.body.questions;
    const type = req.body.type;
    const roundObj = new rounds({
      round: round,
      questions: questions,
      type: type,
    });
    roundObj.save();
    return res.status(200).send({ status: 200 });
  };
};
export { postRoundDetails };
