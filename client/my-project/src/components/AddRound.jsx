/* eslint-disable no-unused-vars */
import { Navigate, useNavigate } from "react-router-dom";
const AddRound = () => {
  const navigate = useNavigate();
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
          </div>
        </div>
      )) || <Navigate to="/CmsLogin"></Navigate>}
    </>
  );
};
export default AddRound;
