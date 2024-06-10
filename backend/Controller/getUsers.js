import { users } from "../Model/Users.js";
const generateRandom = (req, res) => {
  const myObj = {
    name: "Somnath",
    age: 64,
    designation: "Ex Railway Employee",
  };
  res.end(JSON.stringify(myObj));
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
export { getUsers, generateRandom };
