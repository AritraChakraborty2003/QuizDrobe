import { users } from "../Model/Users.js";
const postUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const designation = req.boy.designation;
  const password = req.body.password;

  const user = new users({
    name: name,
    email: email,
    designation: designation,
    password: password,
  });

  try {
    user.save();
    return res.status(200).send({ status: 200 });
  } catch (err) {
    return err;
  }
};

export { postUser };
