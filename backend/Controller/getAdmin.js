import { admins } from "../Model/admin.js";
const getAdmin = (req, res) => {
  admins
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAdmin };
