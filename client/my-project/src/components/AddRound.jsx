/* eslint-disable no-unused-vars */
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const AddRound = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const roundData = {
      1: "Startups",
      2: "IPR",
      3: "Innovation",
      4: "Entrepreneurship",
      5: "VentureDrobe",
    };
    const round = document.getElementById("round").value;
    const questions = document.getElementById("questions").value;

    axios
      .patch(`${import.meta.env.VITE_APP_API_URL}` + "users", {
        round: round,
      })
      .then((response) => {
        if (response.data.status === 200) {
          axios
            .post(`${import.meta.env.VITE_APP_API_URL}` + "rounds", {
              round: round,
              questions: questions,
              type: roundData[round],
            })
            .then((response) => {
              if (response.data.status === 200) {
                document.getElementById("success").innerHTML =
                  "Successfully Updated";
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((error) => console.log(error));
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
                  <select id="round" className="w-[93vw] lg:w-[70vmin] p-2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>{" "}
                </li>

                <li>
                  <p>No of Questions</p>
                </li>
                <li>
                  <select id="questions" className="w-[93vw] lg:w-[70vmin] p-2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
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
export default AddRound;
