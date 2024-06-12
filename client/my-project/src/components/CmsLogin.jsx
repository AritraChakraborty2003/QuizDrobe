/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const CmsLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  //const [round, setRound] = useState(0);
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const [showPassword1, setShowPassword1] = useState(false);
  const [email, setEmail] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/admin")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  const onChangeemail = (e) => {
    setEmail(e.target.value);
  };

  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    let control = false;
    data.map((val) => {
      if (val.email === email && val.password === password) {
        control = true;
        console.log("hello");
        const name = val.name;
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("name", name);
        localStorage.setItem("loggedinadmin", "true");
        navigate("/Cms", { state: { data: val } });
      }
    });
    if (!control) {
      alert("invalid credentials");
    }
  };

  return (
    <>
      <div className=" bg-background main pb-2 w-[100vw] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <form
            id="form"
            className="flex flex-col justify-center items-center mt-6 space-y-7"
          >
            <div className="box mt-[7vmin] md:mt-4 h-[27vmin] md:w-[65vmin] w-[77vw] flex flex-col justify-center items-center p-2">
              <img src="./VDIcon1.png"></img>
            </div>

            <p className="text-[6vmin] text-bodytext font-medium mt-10">
              CMS Log In...
              <p className="text-[4vmin] md:text-[2.75vmin] text-bodytext font-medium">
                ( For admin purpose only )
              </p>
            </p>

            <input
              type="email"
              placeholder="Enter your email..."
              name="email"
              id="email"
              className="p-2 w-[80vw] mt-7 md:w-[60vmin] border-bodytext border-b-2"
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
                <a href="/">Login</a>
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
export default CmsLogin;
