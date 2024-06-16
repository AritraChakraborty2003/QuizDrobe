import { rounds } from "../Model/round.js";
const getRoundDetails = (req, res) => {
  rounds
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => console.log(err));
};
export { getRoundDetails };
