import { question } from "../Model/Questions.js";
const getQuestions = (req, res) => {
  question
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getQuestions };
