function getUsers(req, res) {
  const myObj = {
    name: "Aritra",
    age: 21,
    desig: "Software Developer",
  };
  return res.json(myObj);
}
export { getUsers };
