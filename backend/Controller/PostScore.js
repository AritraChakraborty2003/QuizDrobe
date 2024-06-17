import { scores } from "../Model/Score.js";
const PostScore = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const designation = req.body.designation;
    const institute = req.body.institute;
    const time = req.body.time;
    const score = req.body.score;
    const round = req.body.round;

    const scoresObj = new scores({
      name: name,
      email: email,
      designation: designation,
      institute: institute,
      time: time,
      score: score,
      round: round,
    });

    scoresObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { PostScore };
