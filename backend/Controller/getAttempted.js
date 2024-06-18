import { attempts } from "../Model/Attempted.js";

const getAttempts = (req, res) => {
  attempts
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getAttempts };
