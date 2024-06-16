import { questions } from "../Model/Questions.js";
const PostQuestions = () => {
  return (req, res) => {
    const question = req.body.question;
    const opt1 = req.body.opt1;
    const opt2 = req.body.opt2;
    const opt3 = req.body.opt3;
    const opt4 = req.body.opt4;
    const correct = req.body.correct;
    const round = req.body.round;

    console.log("Hi");

    const questionObj = new questions({
      round: round,
      question: question,
      option1: opt1,
      option2: opt2,
      option3: opt3,
      option4: opt4,
      correct: correct,
    });

    questionObj.save();
    return res.status(200).send({ status: 200 });
  };
};
export { PostQuestions };
