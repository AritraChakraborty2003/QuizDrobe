/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [email, setEmail] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");

  const onChangename = (e) => {
    setName(e.target.value);
  };
  const onChangecnfpassword = (e) => {
    setcnfPassword(e.target.value);
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
      <div className="pb-10 bg-background main w-[100vw] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="box mt-[7vmin] md:mt-4 bg-lightgrey md:w-[47vmin] w-[75vw] flex justify-center items-center p-2">
            <p className="text-maintext  lg:text-[5vmin] text-[8vmin] font-medium font-roboto  pt-2 pb-2 pl-4 pr-4 ">
              Venturedrobe
            </p>
          </div>
          <p className="text-bodytext text-[10vmin] md:text-[6vmin] mt-6">
            Welcome!
          </p>
          <form
            id="form"
            className="flex flex-col justify-center items-center mt-6 space-y-7"
          >
            <input
              type="text"
              placeholder="Enter your name..."
              name="name"
              id="name"
              className="p-2 w-[80vw] md:w-[60vmin] border-bodytext border-b-2"
              onChange={onChangename}
            />
            <input
              type="email"
              placeholder="Enter your email..."
              name="email"
              id="email"
              className="p-2 w-[80vw] md:w-[60vmin] border-bodytext border-b-2"
              onChange={onChangeemail}
            />
            <input
              type="text"
              name="designation"
              id="designation"
              placeholder="Enter your designation..."
              className="p-2 w-[80vw] md:w-[60vmin] border-bodytext border-b-2"
              onChange={onChangedesig}
            />
            <div className="flex space-x-2 w-[80vw] md:w-[60vmin] border-bodytext border-b-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="p-2 w-[70vw] md:w-[55vmin] "
                placeholder="Enter your password..."
                onChange={onChangepassword}
              />
              <img
                src="./rp.png"
                id="showicon"
                height={50}
                width={50}
                onClick={() => {
                  if (showPassword === false) {
                    setShowPassword(true);
                    document.getElementById("showicon").src = "./sp.png";
                  } else {
                    setShowPassword(false);
                    document.getElementById("showicon").src = "./rp.png";
                  }
                }}
              ></img>
            </div>
            <div className="flex space-x-2  w-[80vw] md:w-[60vmin] border-bodytext border-b-2">
              <input
                name="cnfpassword"
                type={showPassword1 ? "text" : "password"}
                id="cnfpassword"
                className="p-2 w-[70vw] md:w-[55vmin] "
                placeholder="Confirm your password..."
                onChange={onChangecnfpassword}
              />
              <img
                src="./rp.png"
                id="showicon1"
                height={50}
                width={50}
                onClick={() => {
                  if (showPassword1 === false) {
                    setShowPassword1(true);
                    document.getElementById("showicon1").src = "./sp.png";
                  } else {
                    setShowPassword1(false);
                    document.getElementById("showicon1").src = "./rp.png";
                  }
                }}
              ></img>
            </div>
            <button
              className="bg-black  bg-buttonColor flex justify-center items-center
              w-[70vw] lg:w-[20vw] p-3 text-maintext font-medium rounded-2xl "
              onClick={onSubmitHandle}
            >
              Create Account
            </button>

            <p className="text-bodytext font-medium mt-5">
              Have an Account?...
              <span className="text-maintext font-bold">Login</span>
            </p>
          </form>

          <p className="mt-10  text-[4vmin] md:text-[2vmin] font-oxygen pb-2">
            www.venturedrobe.in
          </p>
        </div>
      </div>
    </>
  );
};
export default Signup;
