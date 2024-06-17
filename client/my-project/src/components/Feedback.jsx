/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import "./main.css";
import React from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const correctAns = location.state.correctAns;
  const userData = location.state.userData;
  const prevCalcScore = location.state.score;
  const time = 300 - location.state.time;
  console.log(time);
  const onSubmit = () => {
    let score = 0;
    if (localStorage.length > 2) {
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

      const test1 = document.getElementById("test1").value;
      const testp = document.getElementById("testp").value;

      if (rating === 0 || rating1 === 0 || test1 === "" || testp === "") {
        alert("All fields must be filled to proceed");
      } else {
        axios
          .post(`${import.meta.env.VITE_APP_API_URL}` + "feedback", {
            name: userData.name,
            email: userData.email,
            round: userData.round,
            designation: userData.designation,
            star1: rating,
            test1: test1,
            starp: rating1,
            testp: testp,
          })
          .then((res) => {
            if (res.data.status === 200) {
              axios
                .post(`${import.meta.env.VITE_APP_API_URL}` + "score", {
                  name: userData.name,
                  email: userData.email,
                  designation: userData.designation,
                  institute: userData.institute,
                  time: time,
                  score: score,
                  round: userData.round,
                })
                .then((res) => {
                  if (res.data.status === 200) {
                    navigate("/ScorePage", {
                      state: { score: score, userData: userData },
                    });
                  }
                })
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => console.log(err));

        //navigate("/Score", { state: { userData: userData, score: score } });
      }
    } else {
      console.log(prevCalcScore);

      const test1 = document.getElementById("test1").value;
      const testp = document.getElementById("testp").value;

      if (rating === 0 || rating1 === 0 || test1 === "" || testp === "") {
        alert("All fields must be filled to proceed");
      } else {
        axios
          .post(`${import.meta.env.VITE_APP_API_URL}` + "feedback", {
            name: userData.name,
            email: userData.email,
            round: userData.round,
            designation: userData.designation,
            star1: rating,
            test1: test1,
            starp: rating1,
            testp: testp,
          })
          .then((res) => {
            if (res.data.status === 200) {
              axios
                .post(`${import.meta.env.VITE_APP_API_URL}` + "score", {
                  name: userData.name,
                  email: userData.email,
                  designation: userData.designation,
                  institute: userData.institute,
                  time: time,
                  score: prevCalcScore,
                  round: userData.round,
                })
                .then((res) => {
                  if (res.data.status === 200) {
                    navigate("/ScorePage", {
                      state: { score: prevCalcScore, userData: userData },
                    });
                  }
                })
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };
  const [rating, setRating] = useState(0);
  const [rating1, setRating1] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(parseInt(rate));
    localStorage.setItem("rate1", parseInt(rate));
  };
  const handleRating1 = (rate1) => {
    setRating1(parseInt(rate1));
    localStorage.setItem("rate2", parseInt(rate1));
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
                How do you rate the arrangements & guest lectures orgnized by
                IIMT IIC?
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
                  id="test1"
                  className="w-[90vw] lg:w-[67vmin] p-2"
                  placeholder="Enter your testinomials..."
                ></textarea>
              </div>
            </li>
            <li>
              <p className="text-[4.75vmin] md:text-[3.5vmin] pb-2 text-bodytext font-medium mt-3 pr-1 pl-1">
                How do you rate the software platform QuizDrobe and the
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
                id="testp"
                className="w-[90vw] lg:w-[67vmin] p-2"
                placeholder="Enter your testinomials..."
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
