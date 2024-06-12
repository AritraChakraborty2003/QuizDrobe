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
  const [time, setTime] = useState(1000);
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
            <p className="mt-3 ml-3 text-[4.5vmin]">
              Welcome <span className="text-quiztext font-medium">Aritra,</span>
            </p>
            <div className="w-[40vw]  lg:w-[71vw]"></div>
            <div>
              <p className="mt-3 text-[3.45vmin]">
                <span className="text-quiztext font-medium">Time Left:</span>{" "}
                {time}s
              </p>
            </div>
          </div>

          <div className="mainArea h-[90vh] md:mt-5 flex flex-col md:justify-center  md:items-center justify-center ml-2">
            <div className="bg-feedbackbody qArea w-[90vw] md:w-[67vmin] ] ml-3 border-[#939494] border-2 p-3 md:p-4 rounded-[4vmin]">
              <p className="bg-feedbackbody text-[4.56vmin] md:text-[3.75vmin] font-roboton text-quiztext font-medium lg:font-semibold pb-1">
                Q. {qData[0].question} ?
              </p>
            </div>
            <div className="optionArea">
              <div className="space-y-3 mt-5 ">
                <div className="bg-[#F7FAFF] text-[4vmin] md:text-[3vmin]  p-[2.35vmin] lg:text-[2.5vmin] w-[90vw] ml-3 md:w-[65vmin] border-[#cbcbcb] border-2  md:p-[1.5vmin] text-quiztext font-medium rounded-[6vmin]">
                  1. {qData[0].option1}
                </div>
                <div className="bg-[#F7FAFF] text-[4vmin] md:text-[3vmin] lg:text-[2.5vmin] w-[90vw] ml-3 md:w-[65vmin] border-[#cbcbcb] border-2  p-[2.35vmin] md:p-[1.5vmin] text-quiztext font-medium rounded-[6vmin]">
                  2. {qData[0].option2}
                </div>
                <div className="bg-[#F7FAFF] text-[4vmin] md:text-[3vmin] lg:text-[2.5vmin] w-[90vw] ml-3 md:w-[65vmin] border-[#cbcbcb] border-2  p-[2.35vmin]  md:p-[1.5vmin] text-quiztext font-medium rounded-[6vmin]">
                  3. {qData[0].option3}
                </div>
                <div className="bg-[#F7FAFF] text-[4vmin] md:text-[3vmin] lg:text-[2.5vmin] w-[90vw] ml-3 md:w-[65vmin] border-[#cbcbcb] border-2 p-[2.35vmin] md:p-[1.5vmin] text-quiztext font-medium rounded-[6vmin]">
                  4. {qData[0].option4}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-5 mt-3">
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
