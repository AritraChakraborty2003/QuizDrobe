/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [email, setEmail] = useState("");
  const [inst, setInst] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState([]);

  const [dataip, setDataip] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://api.venturedrobe.online/`)
      .then((res) => {
        setDataip(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const onChangeinst = (e) => {
    setInst(e.target.value);
  };
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
    if (name != "" || email != "" || designation != "" || password != "") {
      const userData1 = data.filter((user) => {
        user.email === email;
      });
      const userData2 = data.filter((user) => {
        user.ip === dataip[0].ip;
      });

      console.log(userData1);
      console.log(userData2);

      if (userData1.length > 0) {
        alert("Already registered email");
      } else if (userData2.length > 0) {
        alert("Similar login ip detected with another email");
      } else {
        if (cnfPassword === password) {
          axios
            .post(`${import.meta.env.VITE_APP_API_URL}` + "users", {
              name: name,
              email: email,
              designation: designation,
              institute: inst,
              password: password,
              round: 1,
              questions: 5,
              time: 0,
              oScore: 0,
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
      }
    } else {
      alert("All fields are mandatory to fill");
    }
  };

  return (
    <>
      <div className="LargeDisplayArea hidden lg:block ">
        <div className="flex justify-center pb-2">
          <div className="flex justify-center items-center mt-[2vh] bg-backQuiz rounded-[3vmin] w-[98vw]">
            <div className="logoPart w-[44vw] h-[96vh]   font-roboto flex flex-col justify-center items-center">
              <img src="./VD11.png"></img>
            </div>
            <div className="formPart flex flex-col justify-center items-start w-[54vw]    font-roboto mt-6">
              <p className="text-center text-[12vmin]  md:text-[10vmin] text-bodytext font-medium overflow-hidden">
                Welcome...
              </p>

              <div>
                <form id="form" className="">
                  <div className="border-bodytext flex flex-col justify-center items-start mt-4 gap-x-5 gap-y-4">
                    <input
                      type="text"
                      placeholder="Enter your name..."
                      name="name"
                      id="name"
                      className="bg-white rounded-[2.5vmin]  p-2 2xl:p-3 w-[80vw] md:w-[44vw] border-bodytext border-b-[4px]"
                      onChange={onChangename}
                    />
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      name="email"
                      id="email"
                      className="bg-white rounded-[2.5vmin]  p-2 2xl:p-3 w-[80vw] md:w-[44vw] border-bodytext border-b-[4px]"
                      onChange={onChangeemail}
                    />
                    <input
                      type="text"
                      name="designation"
                      id="designation"
                      placeholder="Enter your designation..."
                      className="bg-white rounded-[2.5vmin] p-2 2xl:p-3 w-[80vw] md:w-[44vw] border-bodytext border-b-[4px]"
                      onChange={onChangedesig}
                    />

                    <input
                      type="text"
                      name="institute"
                      id="institute"
                      placeholder="Enter your institute..."
                      className="bg-white rounded-[2.5vmin] p-2 2xl:p-3 w-[80vw] md:w-[44vw] border-bodytext border-b-[4px]"
                      onChange={onChangeinst}
                    />
                    <div className="bg-white rounded-[2.5vmin]  flex space-x-2 w-[80vw] md:w-[44vw] border-bodytext border-b-[4px]">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className="bg-white rounded-[2.5vmin] 2xl:p-3 p-2 w-[70vw] md:w-[44vw] "
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
                    <div className="bg-white rounded-[2.5vmin]  flex space-x-2  w-[80vw] md:w-[44vw] border-bodytext border-b-[4px]">
                      <input
                        name="cnfpassword"
                        type={showPassword1 ? "text" : "password"}
                        id="cnfpassword"
                        className="p-2 2xl:p-3 w-[70vw] md:w-[84vmin] bg-white rounded-[2.5vmin]  "
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
                            document.getElementById("showicon1").src =
                              "./sp.png";
                          } else {
                            setShowPassword1(false);
                            document.getElementById("showicon1").src =
                              "./rp.png";
                          }
                        }}
                      ></img>
                    </div>
                  </div>
                  <div className="w-[100vw] flex  flex-col gap-y-3 lg:gap-y-4 justify-center items-start">
                    <button
                      className="mt-7 lg:mt-5 bg-black  bg-white flex justify-center items-center
              w-[70vw] md:w-[20vw] p-2 2xl:p-3  text-maintext font-medium rounded-2xl "
                      onClick={onSubmitHandle}
                    >
                      Create Account
                    </button>

                    <p className="text-bodytext font-medium mt-2">
                      Have an Account?...
                      <span className="text-maintext font-bold">
                        <a href="/login">Login</a>
                      </span>
                    </p>
                  </div>
                </form>

                <p className="mt-5  text-[3.45vmin] md:text-[2vmin] font-oxygen pb-2">
                  www.venturedrobe.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="h-screen bg-gradient-to-bl from-[#9ed8ff] to-backQuiz  lg:bg-gradient-to-tr lg:from-background lg:to-background font-roboto main w-[100vw] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-1">
            <div className="mt-4 from-background to-backQuiz   lg:bg-gradient-to-tl lg:from-background lg:to-background font-roboto box  md:mt-4 h-[42vmin] md:h-[30vmin] md:w-[65vmin] w-[85vw] flex flex-col justify-center items-center p-2">
              <img
                src="./VDIcon1.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>

            <p className="text-[12vmin] md:text-[6vmin]  text-bodytext font-medium mt-3">
              Welcome...
            </p>
            <form id="form">
              <div className="flex flex-wrap justify-center items-center mt-6 gap-x-5 gap-y-4">
                <input
                  type="text"
                  placeholder="Enter your name..."
                  name="name"
                  id="name"
                  className="bg-buttonColor rounded-[2.5vmin]  p-2 w-[80vw] md:w-[87vmin] border-bodytext border-b-[3.75px]"
                  onChange={onChangename}
                />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  name="email"
                  id="email"
                  className="bg-buttonColor rounded-[2.5vmin]  p-2 w-[80vw] md:w-[87vmin] border-bodytext border-b-[3.75px]"
                  onChange={onChangeemail}
                />
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  placeholder="Enter your designation..."
                  className="bg-buttonColor rounded-[2.5vmin] p-2 w-[80vw] md:w-[87vmin] border-bodytext border-b-[3.75px]"
                  onChange={onChangedesig}
                />
                <input
                  type="text"
                  name="institute"
                  id="institute"
                  placeholder="Enter your institute..."
                  className="bg-white rounded-[2.5vmin] p-2 2xl:p-3 w-[80vw] md:w-[44vw] border-bodytext border-b-[4px]"
                  onChange={onChangeinst}
                />
                <div className="bg-buttonColor rounded-[2.5vmin] flex space-x-2 w-[80vw] md:w-[87vmin] border-bodytext border-b-[3.75px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="bg-buttonColor rounded-[2.5vmin] p-2 w-[70vw] md:w-[84vmin] "
                    placeholder="Enter your password..."
                    onChange={onChangepassword}
                  />
                  <img
                    src="./rp.png"
                    id="showicon3"
                    height={50}
                    width={50}
                    onClick={() => {
                      if (showPassword1 === false) {
                        setShowPassword1(true);
                        document.getElementById("showicon3").src = "./sp.png";
                      } else {
                        setShowPassword1(false);
                        document.getElementById("showicon3").src = "./rp.png";
                      }
                    }}
                  ></img>
                </div>
                <div className="bg-buttonColor rounded-[2.5vmin] flex space-x-2  w-[80vw] md:w-[87vmin] border-bodytext border-b-[3.75px]">
                  <input
                    name="cnfpassword"
                    type={showPassword1 ? "text" : "password"}
                    id="cnfpassword"
                    className="p-2 w-[70vw] md:w-[84vmin] bg-buttonColor rounded-[2.5vmin]  "
                    placeholder="Confirm your password..."
                    onChange={onChangecnfpassword}
                  />
                  <img
                    src="./rp.png"
                    id="showicon4"
                    height={50}
                    width={50}
                    onClick={() => {
                      if (showPassword3 === false) {
                        setShowPassword3(true);
                        document.getElementById("showicon4").src = "./sp.png";
                      } else {
                        setShowPassword3(false);
                        document.getElementById("showicon4").src = "./rp.png";
                      }
                    }}
                  ></img>
                </div>
              </div>
              <div className="w-[100vw] flex  flex-col gap-y-3 lg:gap-y-4 justify-center items-center">
                <button
                  className="mt-7 lg:mt-3 bg-black  bg-buttonColor flex justify-center items-center
              w-[70vw] md:w-[24vw] p-3 text-maintext font-medium rounded-2xl "
                  onClick={onSubmitHandle}
                >
                  Create Account
                </button>

                <p className="text-bodytext font-medium mt-1">
                  Have an Account?...
                  <span className="text-maintext font-bold">
                    <a href="/login">Login</a>
                  </span>
                </p>
              </div>
            </form>

            <p className="mt-1  text-[3.45vmin] md:text-[2vmin] font-oxygen pb-2">
              www.venturedrobe.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
