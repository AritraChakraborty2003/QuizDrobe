import { adminObj } from "../Model/admin.js";
const getAdmin = (req, res) => {
  adminObj
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAdmin };
