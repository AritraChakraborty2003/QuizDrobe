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
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //const [showPassword1, setShowPassword1] = useState(false);
  const [email, setEmail] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "admin")
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
      <div className="LargeDisplayArea hidden lg:block ">
        <div className="flex justify-center">
          <div className="flex justify-center items-center mt-[2vh] bg-backQuiz rounded-[3vmin] w-[98vw]">
            <div className="logoPart w-[44vw] h-[96vh]   font-roboto flex flex-col justify-center items-center">
              <img src="./VD11.png"></img>
            </div>
            <div className="formPart flex flex-col justify-center items-start w-[54vw]  h-[96vh]   font-roboto ">
              <div className="flex flex-col justify-center items-center">
                <p className="text-[10vmin] md:text-[6vmin] text-bodytext font-medium mt-1">
                  CMS Log In...{" "}
                  <span className="text-[2.45vmin]">
                    ( For admin purposes only )
                  </span>
                </p>
              </div>

              <div>
                <form id="form" className="">
                  <div className="border-bodytext flex flex-col justify-center items-start mt-4 gap-x-5 gap-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      name="email"
                      id="email"
                      className="bg-white rounded-[2.5vmin]  p-3 w-[80vw] md:w-[77vmin] border-bodytext border-b-[4px]"
                      onChange={onChangeemail}
                    />

                    <div className="bg-white rounded-[2.5vmin] flex space-x-2 w-[80vw] md:w-[77vmin] border-bodytext border-b-[4px]">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className="bg-white rounded-[2.5vmin] p-3 w-[70vw] md:w-[77vmin] "
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
                            document.getElementById("showicon").src =
                              "./sp.png";
                          } else {
                            setShowPassword(false);
                            document.getElementById("showicon").src =
                              "./rp.png";
                          }
                        }}
                      ></img>
                    </div>
                  </div>
                </form>

                <div className="w-[100vw] flex  flex-col gap-y-3 lg:gap-y-4 justify-center items-start">
                  <button
                    className="mt-7 lg:mt-5 bg-black  bg-white flex justify-center items-center
              w-[70vw] md:w-[20vw] p-3 text-maintext font-medium rounded-2xl "
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
                </div>
              </div>

              <p className="mt-5  text-[3.45vmin] md:text-[2vmin] font-oxygen pb-2">
                www.venturedrobe.in
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className=" pb-10 bg-gradient-to-bl from-background to-backQuiz  lg:bg-gradient-to-tl lg:from-background lg:to-background  main  sm:h-[100vh] w-[100vw] flex justify-center items-center">
          <div className="bg-gradient-to-bl from-background to-backQuiz  lg:bg-gradient-to-tl lg:from-background lg:to-background font-roboto flex flex-col justify-center items-center">
            <form
              id="form"
              className="flex flex-col justify-center items-center mt-2 space-y-7"
            >
              <div className="mt-[7vmin] from-background to-backQuiz  lg:bg-gradient-to-tl lg:from-background lg:to-background font-roboto box  md:mt-4 h-[40vmin] md:h-[30vmin] md:w-[65vmin] w-[85vw] flex flex-col justify-center items-center p-2">
                <img
                  src="./VDIcon1.png"
                  className="max-w-full max-h-full object-contain"
                ></img>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[10vmin] md:text-[6vmin] text-bodytext font-medium mt-1">
                  CMS Log In...
                </p>
              </div>
              <input
                type="email"
                placeholder="Enter your email..."
                name="email"
                id="email"
                className="bg-buttonColor rounded-[2.5vmin]  p-2 w-[80vw] mt-7 md:w-[60vmin] border-bodytext border-b-[4px]"
                onChange={onChangeemail}
              />

              <div className="flex space-x-2 w-[80vw] md:w-[60vmin] border-bodytext border-b-[4px] bg-buttonColor rounded-[2.5vmin]">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="p-2 w-[70vw] md:w-[55vmin] bg-buttonColor rounded-[2.5vmin]"
                  placeholder="Enter your password..."
                  onChange={onChangepassword}
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
              w-[70vw] md:w-[25vw] p-3 text-maintext font-medium rounded-2xl "
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
      </div>
    </>
  );
};
export default CmsLogin;
