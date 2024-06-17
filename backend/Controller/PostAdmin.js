import { hosts } from "../Model/admin.js";
const PostAdmin = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newhost = new hosts({
      name: name,
      email: email,
      password: password,
    });

    newhost.save();
    return res.status(200).send({ status: 200 });
  };
};
export { PostAdmin };
