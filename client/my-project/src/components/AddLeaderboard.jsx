/* eslint-disable no-unused-vars */
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const AddLeaderboard = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const choice = document.getElementById("choice").value;
    console.log(choice);
  };
  return (
    <>
      {(localStorage.getItem("loggedinadmin") === "true" && (
        <div className="mainBody h-[100vh] bg-backQuiz">
          <button
            className="bg-white text-black mt-3 ml-3 p-3"
            onClick={() => {
              navigate("/Cms");
            }}
          >
            Back
          </button>
          <div className="flex flex-col justify-center items-center mt-1">
            <div className="box mt-[7vmin] md:mt-4 h-[37vmin] md:h-[27vmin] md:w-[65vmin] w-[77vw] flex flex-col justify-center items-center p-2">
              <img src="./VDIcon1.png"></img>
            </div>
            <form>
              <h1 id="success" className="text-5xl font-bold pb-2"></h1>
              <ul className="space-y-4 mt-5">
                <li>
                  <p>Choose Round</p>
                </li>
                <li>
                  <select id="choice" className="w-[93vw] lg:w-[70vmin] p-2">
                    <option value="">Select a Option</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>{" "}
                </li>
              </ul>
              <div className="flex justify-center mt-4 p-3">
                <button
                  className="bg-bodytext text-white p-3"
                  onClick={onSubmit}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )) || <Navigate to="/CmsLogin"></Navigate>}
    </>
  );
};
export default AddLeaderboard;
