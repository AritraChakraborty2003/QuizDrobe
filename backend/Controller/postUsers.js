import { users } from "../Model/Users.js";
const postUser = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const designation = req.body.designation;
    const password = req.body.password;

    const user = new users({
      name: name,
      email: email,
      designation: designation,
      password: password,
    });

    user.save();
    console.log("user Created");
  };
};
export { postUser };
