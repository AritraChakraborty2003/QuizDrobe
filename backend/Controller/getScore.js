import { scores } from "../Model/Score.js";

const getScore = (req, res) => {
  scores
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getScoreId = (req, res) => {
  if (req.query.round === undefined) {
    scores
      .findOne({ email: req.query.email })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  } else if (req.query.email === undefined) {
    console.log(req.query.round);
    scores
      .find({ round: req.query.round })
      .then((val) => {
        res.json(val);
      })
      .catch((err) => console.log(err));
  } else {
    scores
      .findOne({ email: req.query.email, round: req.query.round })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  }
};

export { getScore, getScoreId };
