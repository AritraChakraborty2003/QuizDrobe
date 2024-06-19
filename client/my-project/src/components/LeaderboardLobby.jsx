import { useNavigate } from "react-router-dom";
import LeaderboardR1 from "./LeaderboardR1";

const LeaderboardLobby = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-backQuiz font-poppins">
        <button
          className="p-2 text-black bg-white ml-2 mt-2"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
        <div className="mainDisplay bg-backQuiz  lg:h-full  w-[100vw] flex flex-col gap-4 items-center pb-2">
          <div className="textHeader flex gap-x-3  h-[15vmin] justify-center items-center">
            <p className="text-2xl lg:text-6xl pb-3 font-extrabold font-roboto mt-5 text-bodytext">
              <span className="text-[#000]"> Final</span> Leaderboard
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
            <div className="holder pb-2">
              Round 1
              <div className="underline h-5 border-[#000] border-t-4 lg:border-t-8 w-30 pt-2"></div>
            </div>
            <div className="holder pb-2">
              Round 2
              <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
            </div>
            <div className="holder pb-2">
              Round 3
              <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
            </div>
            <div className="holder pb-2">
              Round 4{" "}
              <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
            </div>
            <div className="holder pb-2">
              Round 5{" "}
              <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
            </div>
            <div className="holder pb-2">
              Overall{" "}
              <div className="underline h-5 border-bodytext border-t-4 lg:border-t-8 w-30 pt-2"></div>
            </div>
          </div>

          <LeaderboardR1 />
        </div>
      </div>
    </>
  );
};
export default LeaderboardLobby;
