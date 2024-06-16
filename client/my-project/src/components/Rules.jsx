/* eslint-disable no-unused-vars */
import "./main.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
const Rules = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/questions/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  const location = useLocation();
  const userData = location.state.data;
  const round = userData.round;
  const qData = data.filter((val) => val.round == 1);
  console.log(qData);
  console.log(userData);
  return (
    <>
      {(localStorage.getItem("loggedin") === "true" && (
        <body className="bg-backQuiz font-roboto sm:h-[100vh] flex justify-center items-center">
          <div className="bg-backQuiz pb-16 mainBody w-screen md:h-screen flex flex-col justify-center items-center ">
            <div className="rulesBody p-2  w-[93vw] lg:w-[85vmin] border-rulebody border-2 bg-rulebody rounded-2xl  mt-5 pb-5 ">
              <ul className="mt-4 bg-rulebody ">
                <li className="w-full flex justify-center items-center bg-rulebody">
                  <button className="bg-bodytext text-white flex justify-center items-center p-2 md:w-[27vmin] rounded-2xl text-[6vmin] md:text-[3vmin]">
                    Quiz Rules
                  </button>
                </li>
                <li className="flex flex-col space-y-4 ml-3 mt-4 bg-rulebody">
                  <li className="bg-rulebody">
                    1. Each Question of the quiz carries 10 marks and no
                    negative marking
                  </li>
                  <li className="bg-rulebody">
                    2. Winners will recieve certificates and goodies from
                    VentureDrobe and IIC
                  </li>
                  <li className="bg-rulebody">
                    3. Plagiarism or cheating of any means is strictly
                    restricted
                  </li>
                  <li className="bg-rulebody">
                    4. There is in total 5 questions from the current discussed
                    topic
                  </li>
                  <li className="bg-rulebody">
                    5. At the end of quiz please fill the feedback form for
                    rating plaform and event experience
                  </li>
                  <li className="bg-rulebody">
                    6. After the feedback form the personal score will be
                    displayed out of 50
                  </li>
                  <li className="bg-rulebody">
                    7. Scores of each round will be evaluated to declare overall
                    winner
                  </li>
                </li>
              </ul>
              <div className="mt-2 flex justify-center">
                <button
                  className="bg-bodytext text-white flex justify-center items-center p-1 w-[30vmin] md:w-[27vmin] rounded-2xl text-[6vmin] md:text-[3vmin] mt-4"
                  onClick={() => {
                    navigate("/QuizBody", {
                      state: { userData: userData, qdata: qData },
                    });
                  }}
                >
                  next
                </button>
              </div>
            </div>
          </div>
        </body>
      )) || <Navigate to="/login" />}
    </>
  );
};
export default Rules;
