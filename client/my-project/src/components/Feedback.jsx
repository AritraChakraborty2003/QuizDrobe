/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import "./main.css";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
const Feedback = () => {
  const location = useLocation();
  //const navigate = useNavigate();
  const correctAns = location.state.correctAns;
  const userData = location.state.userData;
  const prevCalcScore = location.state.score;
  const onSubmit = () => {
    let score = 0;
    if (localStorage.length > 0) {
      for (var i = 0; i < correctAns.length; i++) {
        if (localStorage.getItem(i) === null) {
          score += 0;
        }
        if (correctAns[i] === localStorage.getItem(i)) {
          score += 10;
        }
      }
      localStorage.clear();
      console.log(score);
      //navigate("/Score", { state: { userData: userData, score: score } });
    } else {
      console.log(prevCalcScore);
    }
  };
  const [rating, setRating] = useState(0);
  const [rating1, setRating1] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(parseInt(rate));
    localStorage.setItem("rate1", parseInt(rate));
    console.log(localStorage.getItem("rate1"));
  };
  const handleRating1 = (rate1) => {
    setRating1(parseInt(rate1));
    localStorage.setItem("rate2", parseInt(rate1));
    console.log(localStorage.getItem("rate2"));
  };

  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };

  return (
    <>
      <div className="mainHolder h-screen flex justify-center items-center font-poppins">
        <div className="main  h-screen w-[100vw] lg:h-[96vh] lg:w-[98vw] p-2 bg-backQuiz lg:rounded-[4vmin] ">
          <ul className="flex flex-col justify-center items-center p-3s space-y-2 lg:space-y-4">
            <li>
              <p className="text-[8vmin] md:text-[8vmin] pb-2 text-bodytext font-bold">
                Share Your Feedback...
              </p>
            </li>
            <li>
              <p className="text-[4.75vmin] md:text-[3.5vmin] pb-2 text-bodytext font-medium mt-3 pr-1 pl-1">
                How do you rate the overall arrangements and guest lectures
                orgnized by IIMT IIC?
              </p>
            </li>
            <li>
              <div className="starHolder1 flex justify-center space-x-3 lg:space-x-10">
                <Rating
                  onClick={handleRating}
                  initialValue={rating}
                  SVGstyle={{ display: "inline" }}
                />
              </div>
            </li>
            <li>
              <div className="starHolder1 flex justify-center space-x-3 lg:space-x-10">
                <textarea
                  className="w-[90vw] lg:w-[67vmin] p-2"
                  placeholder="Enter testinomials..."
                ></textarea>
              </div>
            </li>
            <li>
              <p className="text-[4.75vmin] md:text-[3.5vmin] pb-2 text-bodytext font-medium mt-3 pr-1 pl-1">
                How do you rate the software platform of QuizDrobe and the
                management of the event?
              </p>
            </li>
            <li>
              <div className="starHolder1 flex justify-center space-x-3 lg:space-x-10">
                <Rating
                  onClick={handleRating1}
                  initialValue={rating1}
                  SVGstyle={{ display: "inline" }}
                />
              </div>
            </li>
            <li>
              <textarea
                className="w-[90vw] lg:w-[67vmin] p-2"
                placeholder="Enter testinomials..."
              ></textarea>
            </li>
            <li>
              <button
                className="p-2 bg-bodytext text-white w-[30vw] lg:w-[15vmin] mt-5 lg:mt-3"
                onClick={onSubmit}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Feedback;
