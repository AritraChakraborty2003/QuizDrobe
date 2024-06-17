import { hosts } from "../Model/admin.js";
const getAdmin = (req, res) => {
  hosts
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAdmin };
