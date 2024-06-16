import { questions } from "../Model/Questions.js";
const getQuestions = (req, res) => {
  questions
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getQuestions };
