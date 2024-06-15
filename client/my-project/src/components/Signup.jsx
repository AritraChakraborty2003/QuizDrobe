/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
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
    if (cnfPassword === password) {
      axios
        .post("http://127.0.0.1:8000/api/users", {
          name: name,
          email: email,
          designation: designation,
          password: password,
          round: 1,
        })
        .then((response) => {
          if (response.data.status === 200) {
            navigate("/login");
          } else {
            alert("Account not created");
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Entered password don't match");
    }
  };

  return (
    <>
      <div className="pb-10 bg-background main w-[100vw] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-1">
          <div className="box mt-[7vmin] md:mt-4 h-[37vmin] md:h-[27vmin] md:w-[65vmin] w-[77vw] flex flex-col justify-center items-center p-2">
            <img src="./VDIcon1.png"></img>
          </div>

          <p className="text-bodytext text-[10vmin] md:text-[8vmin] mt-1">
            Welcome!
          </p>
          <form id="form">
            <div className="flex flex-wrap justify-center items-center mt-6 gap-x-5 gap-y-6">
              <input
                type="text"
                placeholder="Enter your name..."
                name="name"
                id="name"
                className="p-2 w-[80vw] md:w-[87vmin] border-bodytext border-b-2"
                onChange={onChangename}
              />
              <input
                type="email"
                placeholder="Enter your email..."
                name="email"
                id="email"
                className="p-2 w-[80vw] md:w-[87vmin] border-bodytext border-b-2"
                onChange={onChangeemail}
              />
              <input
                type="text"
                name="designation"
                id="designation"
                placeholder="Enter your designation..."
                className="p-2 w-[80vw] md:w-[87vmin] border-bodytext border-b-2"
                onChange={onChangedesig}
              />
              <div className="flex space-x-2 w-[80vw] md:w-[87vmin] border-bodytext border-b-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="p-2 w-[70vw] md:w-[84vmin] "
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
              <div className="flex space-x-2  w-[80vw] md:w-[87vmin] border-bodytext border-b-2">
                <input
                  name="cnfpassword"
                  type={showPassword1 ? "text" : "password"}
                  id="cnfpassword"
                  className="p-2 w-[70vw] md:w-[84vmin] "
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
            </div>
            <div className="w-[100vw] flex  flex-col gap-y-3 lg:gap-y-4 justify-center items-center">
              <button
                className="mt-2 lg:mt-3 bg-black  bg-buttonColor flex justify-center items-center
              w-[70vw] lg:w-[20vw] p-3 text-maintext font-medium rounded-2xl "
                onClick={onSubmitHandle}
              >
                Create Account
              </button>

              <p className="text-bodytext font-medium mt-5">
                Have an Account?...
                <span className="text-maintext font-bold">
                  <a href="/login">Login</a>
                </span>
              </p>
            </div>
          </form>

          <p className="mt-10  text-[3.45vmin] md:text-[2vmin] font-oxygen pb-2">
            www.venturedrobe.in
          </p>
        </div>
      </div>
    </>
  );
};
export default Signup;
