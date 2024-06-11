/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const [showPassword1, setShowPassword1] = useState(false);
  const [email, setEmail] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");

  const onChangeemail = (e) => {
    setEmail(e.target.value);
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
      <div className="pb-10 bg-background main h-[100vh] w-[100vw] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <form
            id="form"
            className="flex flex-col justify-center items-center mt-6 space-y-7"
          >
            <div className="box mt-[7vmin] md:mt-4 bg-lightgrey md:w-[47vmin] w-[75vw] flex flex-col justify-center items-center p-2">
              <div className="bg-white flex flex-col justify-center items-center y md:w-[41vmin] w-[67vw]">
                <p className="text-maintext  lg:text-[5vmin] text-[8vmin] font-medium font-roboto bg-white ">
                  QuizDrobe
                </p>
                <p className="bg-white text-bodytext">
                  (powered By{" "}
                  <span className="font-medium text-bodytext bg-white">
                    VentureDrobe
                  </span>
                  )
                </p>
              </div>
            </div>
            <input
              type="email"
              placeholder="Enter your email..."
              name="email"
              id="email"
              className="p-2 w-[80vw] md:w-[60vmin] border-bodytext border-b-2"
              onChange={onChangeemail}
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

            <button
              className="bg-black  bg-buttonColor flex justify-center items-center
              w-[70vw] lg:w-[20vw] p-3 text-maintext font-medium rounded-2xl "
              onClick={onSubmitHandle}
            >
              Login
            </button>

            <p className="text-bodytext font-medium mt-5">
              Don't Have an Account?...
              <span className="text-maintext font-bold">
                <a href="/">Signup</a>
              </span>
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
export default Login;
