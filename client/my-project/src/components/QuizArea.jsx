/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const QuizArea = (props) => {
  const time = props.time;
  const qData = props.qData;
  const UserData = props.UserData;
  const CorrectAns = props.CorrectAns;

  const Change1 = (val) => {
    document.getElementById(val).style.backgroundColor = "#49688D";
    document.getElementById(val).style.color = "white";
  };
  const Change = (val) => {
    document.getElementById(val).style.backgroundColor = "#F7FAFF";
    document.getElementById(val).style.color = "#737373";
  };

  return (
    <body className="bg-backQuiz  lg:bg-gradient-to-tl lg:from-white lg:to-white font-roboto ">
      <div className="h-[100vh] flex justify-center items-center">
        <div className="mainArea h-[96vh] lg:[80vh] 2xl:h-[96vh] w-[100vw]  flex flex-col md:justify-center  md:items-center justify-center">
          <div className="bg-backQuiz font-roboto w-[99vw] 2xl:pb-[6vmin] 2xl:pt-[6vmin] md:w-[95vw] pb-[5vmin] pt-[5vmin] flex flex-col border-[#939494] lg:border-[2.45px] justify-center items-center rounded-[2.45vmin] lg:shadow-[0_10px_12px_10px_rgba(0,0,0,0.3)]">
            <div className="mt-[2.45vmin]">
              <div className="flex justify-center">
                <p className="ml-3 text-[10vmin] lg:text-[8vmin]">
                  Welcome{" "}
                  <span className="text-quiztext font-medium">Aritra,</span>
                </p>
              </div>
            </div>
            <div className="timerHolder w-[99vw] md:w-[95vw] flex justify-center">
              <div className="h-[16vmin] w-[16vmin]  rounded-[8vmin] bg-bodytext flex justify-center items-center text-[5vmin] lg:text-[4.5vmin] text-white font-medium font-roboto  lg:p-0">
                {props.time}s
              </div>
            </div>
            <div className="bg-feedbackbody qArea w-[90vw] md:w-[85vw] border-[#939494] border-2 p-3 md:p-4 rounded-[4vmin]  border-b-[4px] mt-5">
              <p className="bg-feedbackbody text-[5vmin] md:text-[3.75vmin]  text-quiztext font-semibold lg:font-semibold pb-1 font-roboto ">
                Q1.{" "}
                {localStorage.getItem("index") === null ||
                  (localStorage.getItem("index") === "0" &&
                    qData[0].question)}{" "}
                ?
              </p>
            </div>
            <div className="bg-backQuiz optionArea flex flex-wrap w-[90vw] md:w-[90vw] md:justify-center text-quiztext  font-medium items-center md:mt-3  lg:gap-y-5 lg:gap-x-5 text-[4.25vmin] md:text-[2.15vmin] rounded-[2.45vmin] text-black gap-y-2">
              <div
                id="opt1"
                className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw]  rounded-[4vmin] flex items-center  md:text-[2.75vmin]   p-3  md:pl-3 border-bodytext border-b-[5px] mt-4 lg:mt-[0px]"
                onClick={() => {
                  if (localStorage.getItem("value") != null) {
                    Change(localStorage.getItem("value"));
                  }
                  localStorage.setItem("value", "opt1");
                  console.log(localStorage.getItem("value"));
                  Change1(localStorage.getItem("value"));
                }}
              >
                1. {props.qData[0].option1}
              </div>
              <div
                id="opt2"
                className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw]  rounded-[4vmin] flex items-center  md:text-[2.75vmin]  p-3  md:pl-3    border-bodytext border-b-[5px]"
                onClick={() => {
                  if (localStorage.getItem("value") != null) {
                    Change(localStorage.getItem("value"));
                  }
                  localStorage.setItem("value", "opt2");
                  console.log(localStorage.getItem("value"));
                  Change1(localStorage.getItem("value"));
                }}
              >
                2. {props.qData[0].option2}
              </div>
              <div
                id="opt3"
                className="option bg-[#F7FAFF] w-[90vw] md:w-[41vw] rounded-[4vmin] flex items-center  md:text-[2.75vmin] p-3  md:pl-3   border-bodytext border-b-[5px]"
                onClick={() => {
                  if (localStorage.getItem("value") != null) {
                    Change(localStorage.getItem("value"));
                  }
                  localStorage.setItem("value", "opt3");
                  console.log(localStorage.getItem("value"));
                  Change1(localStorage.getItem("value"));
                }}
              >
                3. {props.qData[0].option3}
              </div>
              <div
                id="opt4"
                className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw] rounded-[4vmin] flex items-center  md:text-[2.75vmin]  p-3 md:pl-3   border-bodytext border-b-[5px]"
                onClick={() => {
                  if (localStorage.getItem("value") != null) {
                    Change(localStorage.getItem("value"));
                  }
                  localStorage.setItem("value", "opt4");
                  console.log(localStorage.getItem("value"));
                  Change1(localStorage.getItem("value"));
                }}
              >
                4. {props.qData[0].option4}
              </div>
            </div>
            <div className="bg-backQuiz flex justify-center items-center space-x-5 mt-5 rounded-[2vmin]">
              <button className="bg-bodytext text-white flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-white border-2">
                Previous
              </button>
              <button
                className="bg-[#F7FAFF] text-bodytext flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-bodytext border-2"
                onClick={() => {
                  if (localStorage.getItem("index") == null) {
                    localStorage.setItem("index", 1);
                  }
                  let ind = parseInt(localStorage.getItem("index"));
                  ind = ind + 1;
                  console.log(ind);
                  localStorage.setItem("index", ind);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default QuizArea;
