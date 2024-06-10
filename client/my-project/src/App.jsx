/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");

  const onChangename = (e) => {
    setName(e.target.value);
  };

  const onChangeemail = (e) => {
    setEmail(e.target.value);
  };

  const onChangedesig = (e) => {
    setDesignation(e.target.value);
  };

  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    /*console.log(name);
    console.log(email);
    console.log(designation);
    console.log(password);*/

    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };

    axios
      .post("http://127.0.0.1:8000/api/users", {
        name: name,
        email: email,
        designation: designation,
        password: password,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1 id="success"></h1>
      <form className="form" id="form">
        <input
          type="text"
          placeholder="Enter your name..."
          name="name"
          id="name"
          onChange={onChangename}
        />
        <input
          type="email"
          placeholder="Enter your email..."
          name="email"
          id="email"
          onChange={onChangeemail}
        />
        <input
          type="text"
          name="designation"
          id="designation"
          placeholder="Enter your designation..."
          onChange={onChangedesig}
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter your password..."
          onChange={onChangepassword}
        />
        <button className="bg-black text-white" onClick={onSubmitHandle}>
          Signup
        </button>
      </form>
    </>
  );
}

export default App;
