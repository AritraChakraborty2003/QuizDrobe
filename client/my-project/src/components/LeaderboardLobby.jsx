import { useLocation, useNavigate } from "react-router-dom";
import LeaderboardR1 from "./LeaderboardR1";
import LeaderboardR2 from "./LeaderboardR2";
import LeaderboardR3 from "./LeaderboardR3";
import LeaderboardOverall from "./LeaderboardOverall";
import { useState } from "react";

const LeaderboardLobby = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [choice, setChoice] = useState(1);

  const data = location.state.data;
  const odata = location.state.odata;

  return (
    <>
      <div className="bg-backQuiz font-poppins">
        <button
          className="p-2 text-black bg-white ml-2 mt-2"
          onClick={() => {
            navigate("/AddLeaderboard");
          }}
        >
          Back
        </button>
        {(screen.width >= 360 && screen.width < 413 && screen.height > 600 && (
          <div className="mainDisplay bg-backQuiz  h-[100vh]  w-[100vw] flex flex-col gap-4 items-center pb-2">
            <div className="textHeader flex gap-x-3  h-[15vmin] justify-center items-center">
              <p className="text-2xl lg:text-6xl pb-3 font-extrabold font-roboto mt-5 text-bodytext">
                Leaderboard
              </p>
              <div className="holder">
                <div className="imgHolder flex h-[15vmin] w-[30vmin] items-center ">
                  <img
                    src="./VDIcon1.png"
                    alt=""
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="choiceArea w-[100vw] pb-2 flex flex-wrap justify-center items-center text-[5vmin] lg:text-[4.35vmin]  gap-x-7  lg:gap-x-12 2xl:gap-x-[8vmin] font-roboto">
              <div
                className="holder pb-2"
                onClick={() => {
                  setChoice(1);
                }}
              >
                Round 1
                {(choice === 1 && (
                  <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )) || (
                  <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )}
              </div>
              <div
                className="holder pb-2"
                onClick={() => {
                  setChoice(2);
                }}
              >
                Round 2
                {(choice === 2 && (
                  <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )) || (
                  <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )}
              </div>
              <div
                className="holder pb-2"
                onClick={() => {
                  setChoice(3);
                }}
              >
                Round 3
                {(choice === 3 && (
                  <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )) || (
                  <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )}
              </div>

              <div
                className="holder pb-2"
                onClick={() => {
                  setChoice(6);
                }}
              >
                Overall{" "}
                {(choice === 6 && (
                  <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )) || (
                  <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )}
              </div>
            </div>

            {(choice == 1 && <LeaderboardR1 data={data} />) ||
              (choice === 2 && <LeaderboardR2 data={data} />) ||
              (choice === 3 && <LeaderboardR3 data={data} />) ||
              (choice === 6 && (
                <LeaderboardOverall data={data} odata={odata} />
              ))}
          </div>
        )) || (
          <div className="mainDisplay bg-backQuiz   w-[100vw] flex flex-col gap-4 items-center pb-2">
            <div className="textHeader flex gap-x-3  h-[15vmin] justify-center items-center">
              <p className="text-2xl lg:text-6xl pb-3 font-extrabold font-roboto mt-5 text-bodytext">
                Leaderboard
              </p>
              <div className="holder">
                <div className="imgHolder flex h-[15vmin] w-[30vmin] items-center overflow-hidden ">
                  <img
                    src="./VDIcon1.png"
                    alt=""
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="choiceArea w-[100vw] pb-2 flex flex-wrap justify-center items-center text-[5vmin] lg:text-[4.35vmin]  gap-x-7  lg:gap-x-12 2xl:gap-x-[13vmin] font-roboto">
              <div
                className="holder pb-2"
                onClick={() => {
                  setChoice(1);
                }}
              >
                Round 1
                {(choice === 1 && (
                  <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )) || (
                  <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )}
              </div>
              <div
                className="holder pb-2"
                onClick={() => {
                  setChoice(2);
                }}
              >
                Round 2
                {(choice === 2 && (
                  <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )) || (
                  <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )}
              </div>
              <div
                className="holder pb-2"
                onClick={() => {
                  setChoice(3);
                }}
              >
                Round 3
                {(choice === 3 && (
                  <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )) || (
                  <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )}
              </div>

              <div
                className="holder pb-2"
                onClick={() => {
                  setChoice(6);
                }}
              >
                Overall{" "}
                {(choice === 6 && (
                  <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )) || (
                  <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
                )}
              </div>
            </div>

            {(choice == 1 && <LeaderboardR1 data={data} />) ||
              (choice === 2 && <LeaderboardR2 data={data} />) ||
              (choice === 3 && <LeaderboardR3 data={data} />) ||
              (choice === 6 && (
                <LeaderboardOverall data={data} odata={odata} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default LeaderboardLobby;
