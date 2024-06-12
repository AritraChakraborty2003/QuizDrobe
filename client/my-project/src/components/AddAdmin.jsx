/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Navigate, useNavigate } from "react-router-dom";
const Addadmin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangename = (e) => {
    setName(e.target.value);
  };

  const onChangeemail = (e) => {
    setEmail(e.target.value);
  };

  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/admin", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.status === 200) {
          navigate("/Cms");
        } else {
          alert("Account not created");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <button
        className="bg-white text-black mt-3 ml-3 p-3"
        onClick={() => {
          navigate("/Cms");
        }}
      >
        Back
      </button>
      {(localStorage.getItem("loggedinadmin") === "true" && (
        <div className="pb-10 bg-background main w-[100vw] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-1">
            <div className="box mt-[7vmin] md:mt-4 h-[37vmin] md:h-[27vmin] md:w-[65vmin] w-[77vw] flex flex-col justify-center items-center p-2">
              <img src="./VDIcon1.png"></img>
            </div>

            <p className="text-bodytext text-[10vmin] md:text-[8vmin] mt-1">
              Add new Admin!
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

              <button
                className="bg-black  bg-buttonColor flex justify-center items-center
              w-[70vw] lg:w-[15vw] p-3 text-maintext font-medium rounded-2xl "
                onClick={onSubmitHandle}
              >
                Add
              </button>
            </form>

            <p className="mt-10  text-[3.45vmin] md:text-[2vmin] font-oxygen pb-2">
              www.venturedrobe.in
            </p>
          </div>
        </div>
      )) || <Navigate to="/CmsLogin"></Navigate>}
    </>
  );
};
export default Addadmin;
