import { users } from "../Model/Users.js";
const generateRandom = (req, res) => {
  console.log(geoip.lookup(req.ip));
  res.end(JSON.stringify(geoip.lookup(req.ip)));
};
function getUsers(req, res) {
  users
    .find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getUsersID(req, res) {
  const obj = {
    name: "Abhi",
  };
  users
    .findOne({ email: req.query.email })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
}
export { getUsers, generateRandom, getUsersID };
