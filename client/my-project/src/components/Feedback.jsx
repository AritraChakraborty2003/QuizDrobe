/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import "./main.css";
import { useState } from "react";
const Feedback = () => {
  const location = useLocation();
  console.log(
    `Hello ${location.state.userData.name} with email ${location.state.userData.email} your score is: `,
    location.state.userScore
  );

  return (
    <div className="mainBody w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="feedbackArea">
        <div className="feedBox w-[95vw] h-[90vh] ">
          <ul className=" flex flex-col justify-center items-center space-y-4 mt-10 ">
            <li className="w-full flex justify-center items-center">
              <button className="bg-bodytext text-white flex justify-center items-center p-2 rounded-2xl text-[4.5vmin] md:text-[3vmin] pl-3 pr-3">
                Your valuable feedback
              </button>
            </li>
            <li>
              <textarea
                className="bg-[#F7FAFF] p-4 w-[90vw] h-[50vh] lg:w-[70vmin] lg:h-[50vmin] "
                placeholder="Enter your valuable feedback..."
              ></textarea>
            </li>
            <li className="w-[90vw] h-[10vh] lg:w-[70vmin] lg:h-[10vmin] flex justify-end mt-[-2vmin] text-bodytext ">
              1256/3000
            </li>
          </ul>
          <li className="flex justify-center items-center mt-[-2vmin] text-bodytext ">
            <button className="bg-bodytext w-[30vmin] md:w-[20vmin] text-white flex justify-center items-center p-2 rounded-2xl text-[4.75vmin] md:text-[2.75vmin] pl-3 pr-3">
              next
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
