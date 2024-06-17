import { Feedback } from "../Model/Feedback.js";
const getFeedback = (req, res) => {
  Feedback.find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });

  Feedback.save();
};

const getFeedbackId = (req, res) => {
  Feedback.findOne({ email: req.query.email })
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getFeedback, getFeedbackId };
