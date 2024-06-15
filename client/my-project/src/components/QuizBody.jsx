/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
const QuizBody = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state.userData;
  const qData = location.state.qdata;
  console.log(userData);
  console.log(qData);
  const [time, setTime] = useState(999);
  const [score, setScore] = useState(0);
  const correctAns = [];
  qData.map((question) => {
    correctAns.push(question.correct);
  });
  console.log(correctAns);
  useEffect(() => {
    //Implementing the setInterval method

    const interval = setInterval(() => {
      const cnt = time - 1;

      setTime(cnt);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      {(time > 0 && (
        <div className="h-[100vh]">
          <div className="flex ">
            <p className="mt-3 ml-3 md:text-[4.5vmin] 2xl:text-[3vmin]">
              Welcome <span className="text-quiztext font-medium">Aritra,</span>
            </p>
            <div className="w-[40vw]  lg:w-[71vw] 2xl:w-[74vw]"></div>
            <div>
              <p className="mt-3 text-[3.45vmin]">
                <span className="text-quiztext font-medium">Time Left:</span>{" "}
                {time}s
              </p>
            </div>
          </div>

          <div className="mainArea h-[90vh] md:mt-5 flex flex-col md:justify-center  md:items-center justify-center ml-2">
            <div className="bg-feedbackbody qArea w-[90vw] md:w-[80vw] border-[#939494] border-2 p-3 md:p-4 rounded-[4vmin]">
              <p className="bg-feedbackbody text-[4.56vmin] md:text-[3.75vmin]  text-black font-normal lg:font-semibold pb-1">
                Q. {qData[0].question}
              </p>
            </div>
            <div className="optionArea flex flex-wrap w-[90vw] md:w-[90vw] md:justify-center items-center md:mt-3 ml-2 lg:space-y-5 lg:gap-x-5">
              <div className="option bg-[#F7FAFF] text-black w-[90vw] md:w-[38vw]  rounded-[4vmin] flex items-center  md:text-[2.35vmin]   p-4  md:pl-3 mt-3 border-bodytext border-b-2">
                1. {qData[0].option1}
              </div>
              <div className="option bg-[#F7FAFF] text-black w-[90vw] md:w-[38vw]  rounded-[4vmin] flex items-center  md:text-[2.35vmin]  p-4   md:pl-3   mt-3 border-bodytext border-b-2">
                2. {qData[0].option2}
              </div>
              <div className="option bg-[#F7FAFF] text-black w-[90vw] md:w-[38vw] rounded-[4vmin] flex items-center  md:text-[2.35vmin] p-4  md:pl-3  mt-3 border-bodytext border-b-2">
                3. {qData[0].option3}
              </div>
              <div className="option bg-[#F7FAFF] text-black w-[90vw] md:w-[38vw] rounded-[4vmin] flex items-center  md:text-[2.35vmin]  p-4 md:pl-3  mt-3 border-bodytext border-b-2 ">
                4. {qData[0].option4}
              </div>
            </div>
            <div className="flex justify-center items-center space-x-5 mt-4">
              <button className="bg-bodytext text-white flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-white border-2">
                Previous
              </button>
              <button className="bg-[#F7FAFF] text-bodytext flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-bodytext border-2">
                Next
              </button>
            </div>
          </div>
        </div>
      )) ||
        navigate("/feedback", {
          state: {
            userScore: score,
            userData: userData,
          },
        })}
    </>
  );
};
export default QuizBody;
