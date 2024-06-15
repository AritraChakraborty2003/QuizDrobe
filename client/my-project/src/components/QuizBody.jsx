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
        <body className="bg-backQuiz  lg:bg-gradient-to-tl lg:from-white lg:to-white font-roboto ">
          <div className="h-[100vh]">
            <div className="mt-[2.45vmin]">
              <div className="flex">
                <p className="ml-3 text-[6vmin] lg:text-[4.45vmin]">
                  Welcome{" "}
                  <span className="text-quiztext font-medium">Aritra,</span>
                </p>
                <div className="w-[30vw]  lg:w-[70vw] 2xl:w-[70vw]"></div>
              </div>
            </div>

            <div className="mainArea h-[93vh] lg:[80vh] 2xl:h-[90vh]  flex flex-col md:justify-center  md:items-center justify-center">
              <div className="bg-backQuiz font-roboto w-[99vw] 2xl:pb-[6vmin] 2xl:pt-[6vmin] md:w-[95vw] pb-[5vmin] pt-[5vmin] flex flex-col border-[#939494] lg:border-[2.45px] justify-center items-center rounded-[2.45vmin] lg:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)]">
                <div className="timerHolder w-[99vw] md:w-[95vw] flex justify-center">
                  <div className="h-[16vmin] w-[16vmin]  rounded-[8vmin] bg-bodytext flex justify-center items-center text-[5vmin] lg:text-[4.5vmin] text-white font-medium font-roboto  lg:p-0">
                    {time}s
                  </div>
                </div>
                <div className="bg-feedbackbody qArea w-[90vw] md:w-[85vw] border-[#939494] border-2 p-3 md:p-4 rounded-[4vmin]  border-b-[4px] mt-5">
                  <p className="bg-feedbackbody text-[5vmin] md:text-[3.5vmin]  text-quiztext font-semibold lg:font-semibold pb-1 font-roboto ">
                    Q1. {qData[0].question} ?
                  </p>
                </div>
                <div className="bg-backQuiz optionArea flex flex-wrap w-[90vw] md:w-[90vw] md:justify-center items-center md:mt-3  lg:gap-y-5 lg:gap-x-5 text-[4.25vmin] md:text-[2.15vmin] rounded-[2.45vmin] text-black font-normal gap-y-2">
                  <div className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw]  rounded-[4vmin] flex items-center  md:text-[2.75vmin]   p-3  md:pl-3 border-bodytext border-b-[5px] mt-4 lg:mt-[0px]">
                    1. {qData[0].option1}
                  </div>
                  <div className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw]  rounded-[4vmin] flex items-center  md:text-[2.75vmin]  p-3  md:pl-3    border-bodytext border-b-[5px]">
                    2. {qData[0].option2}
                  </div>
                  <div className="option bg-[#F7FAFF] w-[90vw] md:w-[41vw] rounded-[4vmin] flex items-center  md:text-[2.75vmin] p-3  md:pl-3   border-bodytext border-b-[5px]">
                    3. {qData[0].option3}
                  </div>
                  <div className="option bg-[#F7FAFF]  w-[90vw] md:w-[41vw] rounded-[4vmin] flex items-center  md:text-[2.75vmin]  p-3 md:pl-3   border-bodytext border-b-[5px]">
                    4. {qData[0].option4}
                  </div>
                </div>
                <div className="bg-backQuiz flex justify-center items-center space-x-5 mt-5 rounded-[2vmin]">
                  <button className="bg-bodytext text-white flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-white border-2">
                    Previous
                  </button>
                  <button className="bg-[#F7FAFF] text-bodytext flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-bodytext border-2">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </body>
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
