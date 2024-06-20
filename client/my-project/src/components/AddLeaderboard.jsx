/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const AddLeaderboard = () => {
  const [data, setData] = useState([]);
  const [odata, setOData] = useState([]);
  const [show, setShow] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "users")
      .then((res) => {
        setOData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "score")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${import.meta.env.VITE_APP_API_URL}` + "leaderboard")
      .then((res) => {
        setShow(res.data[0].show);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const choice = document.getElementById("choice").value;
    axios
      .patch(`${import.meta.env.VITE_APP_API_URL}` + "leaderboard", {
        show: choice,
      })
      .then((response) => {
        if (response.data.status === 200) {
          document.getElementById("success").innerHTML =
            "Data Added Successfully";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {(localStorage.getItem("loggedinadmin") === "true" &&
        localStorage.getItem("loggedinSuperadmin") === "true" && (
          <div className="mainBody h-[100vh] bg-backQuiz">
            <button
              className="bg-white text-black mt-3 ml-3 p-3"
              onClick={() => {
                localStorage.removeItem("loggedinSuperadmin");
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
                    <p className="text-4xl pb-2">Display Leaderboard:</p>
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
              {show === "true" && data.length > 0 && odata.length > 0 && (
                <div>
                  <button
                    className="bg-bodytext text-white p-3 mt-4"
                    onClick={() => {
                      navigate("/LeaderboardLobby", {
                        state: { data: data, odata: odata },
                      });
                    }}
                  >
                    Check Leaderboard
                  </button>
                </div>
              )}
            </div>
          </div>
        )) || <Navigate to="/CmsLogin"></Navigate>}
    </>
  );
};
export default AddLeaderboard;
