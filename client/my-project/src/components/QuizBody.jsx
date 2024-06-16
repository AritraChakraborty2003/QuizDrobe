/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import QuizArea from "./QuizArea";
/* eslint-disable react/no-unescaped-entities */
const QuizBody = () => {
  const [val, setVal] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state.userData;
  const qData = location.state.qdata;

  const [time, setTime] = useState(999);
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

  return (
    <>
      {(time > 0 && (
        <QuizArea
          time={time}
          qData={qData}
          userData={userData}
          correctAns={correctAns}
        />
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
