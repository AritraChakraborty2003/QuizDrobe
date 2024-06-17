import { host } from "../Model/admin.js";
const getAdmin = (req, res) => {
  host
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAdmin };
