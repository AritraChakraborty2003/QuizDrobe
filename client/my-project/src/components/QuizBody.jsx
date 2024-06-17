/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
const QuizBody = () => {
  const [val, setVal] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state.userData;
  const qData = location.state.qdata;

  const [time, setTime] = useState(300);
  const [score, setScore] = useState(0);
  const correctAns = [];
  qData.map((question) => {
    correctAns.push(question.correct);
  });

  useEffect(() => {
    //Implementing the setInterval method

    const interval = setInterval(() => {
      const cnt = time - 1;

      setTime(cnt);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [time]);

  const onSubmit = () => {
    let score = 0;
    for (var i = 0; i < correctAns.length; i++) {
      if (localStorage.getItem(i) === null) {
        score += 0;
      }
      if (correctAns[i] === localStorage.getItem(i)) {
        score += 10;
      }
    }
    localStorage.clear();
    navigate("/feedback", { state: { userData: userData, score: score } });
  };
  const Change1 = (val) => {
    if (val != "" || val != null) {
      //console.log(val);
      //console.log(CorrectAns);
      let val1 = localStorage.getItem("index");
      let ind = parseInt(localStorage.getItem("index"));
      if (val1 === null) {
        ind = 0;
        localStorage.setItem(ind, val);
      } else {
        localStorage.setItem(ind, val);
      }
      document.getElementById(val).style.backgroundColor = "#49688D";
      document.getElementById(val).style.color = "white";
    }
  };
  const Change = (val) => {
    if (val != "" || val != null) {
      let val1 = localStorage.getItem("index");
      let ind = parseInt(localStorage.getItem("index"));
      if (val1 === null) {
        ind = 0;
        localStorage.setItem(ind, val);
      } else {
        localStorage.setItem(ind, val);
      }
      document.getElementById(val).style.backgroundColor = "#F7FAFF";
      document.getElementById(val).style.color = "#737373";
    }
  };

  return (
    <>
      {(time > 0 && (
        <body className="bg-backQuiz  lg:bg-gradient-to-tl lg:from-white lg:to-white font-roboto ">
          <div className="h-[100vh] flex justify-center items-center">
            <div className="mainArea h-[96vh] lg:[80vh] 2xl:h-[96vh] w-[100vw]  flex flex-col md:justify-center  md:items-center justify-center">
              <div className="bg-backQuiz font-roboto w-[99vw] 2xl:pb-[6vmin] 2xl:pt-[6vmin] md:w-[95vw] pb-[5vmin] pt-[5vmin] flex flex-col border-[#939494] lg:border-[2.45px] justify-center items-center rounded-[2.45vmin] lg:shadow-[0_10px_12px_10px_rgba(0,0,0,0.3)]">
                <div className="mt-[2.45vmin]">
                  <div className="flex justify-center">
                    <p className="ml-3 text-[10vmin] lg:text-[8vmin]">
                      Welcome{" "}
                      <span className="text-bodytext font-semibold">
                        Aritra
                      </span>
                      ,
                    </p>
                  </div>
                </div>
                <div className="timerHolder w-[99vw] md:w-[95vw] flex justify-center">
                  <div className="h-[16vmin] w-[16vmin]  rounded-[8vmin] bg-bodytext flex justify-center items-center text-[5vmin] lg:text-[4.5vmin] text-white font-medium font-roboto  lg:p-0">
                    {time}s
                  </div>
                </div>
                <div className="bg-feedbackbody qArea w-[90vw] md:w-[85vw] border-[#939494] border-2 p-3 md:p-4 rounded-[4vmin]  border-b-[4px] mt-5">
                  <p className="bg-feedbackbody text-[5vmin] md:text-[3.75vmin]  text-quiztext font-semibold lg:font-semibold pb-1 font-poppins ">
                    {(localStorage.getItem("index") === null &&
                      `Q${1}. ` + qData[0].question) ||
                      `Q${parseInt(localStorage.getItem("index")) + 1}. ` +
                        qData[parseInt(localStorage.getItem("index"))].question}
                  </p>
                </div>
                <div className="font-poppins bg-backQuiz optionArea flex flex-wrap w-[90vw] md:w-[90vw] md:justify-center text-quiztext  font-medium items-center md:mt-3  lg:gap-y-5 lg:gap-x-5 text-[4.25vmin] md:text-[2.15vmin] rounded-[2.45vmin] text-black gap-y-2">
                  <div
                    id="a"
                    className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw]  rounded-[4vmin] flex items-center  md:text-[2.75vmin]   p-3  md:pl-3 border-bodytext border-b-[5px] mt-4 lg:mt-[0px]"
                    onClick={() => {
                      if (localStorage.getItem("value") != null) {
                        Change(localStorage.getItem("value"));
                      }
                      localStorage.setItem("value", "a");

                      Change1(localStorage.getItem("value"));
                    }}
                  >
                    1.{" "}
                    {(localStorage.getItem("index") === null &&
                      qData[0].option1) ||
                      qData[parseInt(localStorage.getItem("index"))].option1}
                  </div>
                  <div
                    id="b"
                    className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw]  rounded-[4vmin] flex items-center  md:text-[2.75vmin]  p-3  md:pl-3    border-bodytext border-b-[5px]"
                    onClick={() => {
                      if (localStorage.getItem("value") != null) {
                        Change(localStorage.getItem("value"));
                      }

                      localStorage.setItem("value", "b");

                      Change1(localStorage.getItem("value"));
                    }}
                  >
                    2.
                    {(localStorage.getItem("index") === null &&
                      qData[0].option2) ||
                      qData[parseInt(localStorage.getItem("index"))].option2}
                  </div>

                  <div
                    id="c"
                    className="option bg-[#F7FAFF] w-[90vw] md:w-[41vw] rounded-[4vmin] flex items-center  md:text-[2.75vmin] p-3  md:pl-3   border-bodytext border-b-[5px]"
                    onClick={() => {
                      if (localStorage.getItem("value") != null) {
                        Change(localStorage.getItem("value"));
                      }
                      localStorage.setItem("value", "c");

                      Change1(localStorage.getItem("value"));
                    }}
                  >
                    3.{" "}
                    {(localStorage.getItem("index") === null &&
                      qData[0].option3) ||
                      qData[parseInt(localStorage.getItem("index"))].option3}
                  </div>

                  <div
                    id="d"
                    className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw] rounded-[4vmin] flex items-center  md:text-[2.75vmin]  p-3 md:pl-3   border-bodytext border-b-[5px]"
                    onClick={() => {
                      if (localStorage.getItem("value") != null) {
                        Change(localStorage.getItem("value"));
                      }
                      localStorage.setItem("value", "d");

                      Change1(localStorage.getItem("value"));
                    }}
                  >
                    4.{" "}
                    {(localStorage.getItem("index") === null &&
                      qData[0].option4) ||
                      qData[parseInt(localStorage.getItem("index"))].option4}
                  </div>
                  <div className="w-[100vw] flex justify-center items-center">
                    {(localStorage.getItem("index") == null && (
                      <button
                        className="bg-[#F7FAFF] text-bodytext flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-bodytext border-2"
                        onClick={() => {
                          if (localStorage.getItem("index") == null) {
                            localStorage.setItem("index", 1);
                            Change(localStorage.getItem("value"));
                          } else {
                            let ind = parseInt(localStorage.getItem("index"));
                            if (ind < userData.questions) {
                              ind = ind + 1;
                              Change(localStorage.getItem("value"));
                              localStorage.setItem("index", ind);
                            }
                          }
                        }}
                      >
                        Next
                      </button>
                    )) ||
                      (parseInt(localStorage.getItem("index")) <
                        userData.questions - 1 && (
                        <button
                          className="bg-[#F7FAFF] text-bodytext flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-bodytext border-2"
                          onClick={() => {
                            if (localStorage.getItem("index") == null) {
                              localStorage.setItem("index", 1);
                            } else {
                              let ind = parseInt(localStorage.getItem("index"));

                              if (ind < userData.questions) {
                                ind = ind + 1;

                                Change(localStorage.getItem("value"));
                                localStorage.setItem("index", ind);
                              }
                            }
                          }}
                        >
                          Next
                        </button>
                      ))}

                    {parseInt(localStorage.getItem("index")) ==
                      userData.questions - 1 && (
                      <button
                        className="bg-bodytext text-white flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-white border-2"
                        onClick={() => {
                          onSubmit();
                        }}
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      )) ||
        navigate("/feedback", {
          state: {
            userData: userData,
            correctAns: correctAns,
          },
        })}
    </>
  );
};
export default QuizBody;
