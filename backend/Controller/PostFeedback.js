import { Feedback } from "../Model/Feedback.js";
const PostFeedback = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const round = req.body.round;
    const designation = req.body.designaton;
    const star1 = req.body.star1;
    const test1 = req.body.test1;
    const starp = req.body.starp;
    const testp = req.body.testp;

    const FeedbackObj = new Feedback({
      name: name,
      email: email,
      round: round,
      designation: designation,
      star1: star1,
      test1: test1,
      starp: starp,
      testp: testp,
    });

    FeedbackObj.save();

    return res.status(200).send({ status: 200 });
  };
};

export { PostFeedback };
