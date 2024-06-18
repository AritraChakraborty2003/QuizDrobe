const LeaderboardLobby = () => {
  return (
    <>
      <div className="mainDisplay bg-backQuiz h-[100vh] lg:h-full  w-[100vw] flex flex-col gap-6 items-center">
        <div className="textHeader">
          <p className="text-4xl lg:text-6xl pb-3 font-extrabold font-roboto mt-5 text-bodytext">
            <span className="text-[#000]"> Final</span> Leaderboard
          </p>
        </div>
        <div className="choiceArea w-[100vw] pb-2 flex flex-wrap justify-center items-center text-[5vmin] lg:text-[4.35vmin] lg:gap-x-12 gap-x-7">
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

        <div className="displayArea flex flex-col gap-y-4">
          <div className="firstBox flex justify-center gap-x-4 ">
            <div className="imageArea w-[25vmin] h-[25vmin]">
              <img
                src="./First.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="textArea w-[70vmin] lg:w-[80vmin] lg:mt-6">
              <ul className="">
                <li>Name</li>
                <li>Email</li>
                <li>Designation</li>
                <li>Institute</li>
                <li className="flex gap-x-5">
                  Score
                  <li>Time</li>
                </li>
              </ul>
            </div>
          </div>

          <div className="secondBox flex justify-center gap-x-4 ">
            <div className="imageArea w-[25vmin] h-[25vmin]">
              <img
                src="./second.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="textArea w-[70vmin] lg:w-[80vmin] lg:mt-6">
              <ul className="">
                <li>Name</li>
                <li>Email</li>
                <li>Designation</li>
                <li>Institute</li>
                <li className="flex gap-x-5">
                  Score
                  <li>Time</li>
                </li>
              </ul>
            </div>
          </div>

          <div className="thirdBox flex justify-center gap-x-4 ">
            <div className="imageArea w-[25vmin] h-[25vmin]">
              <img
                src="./third.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
            <div className="textArea w-[70vmin] lg:w-[80vmin] lg:mt-6">
              <ul className="">
                <li>Name</li>
                <li>Email</li>
                <li>Designation</li>
                <li>Institute</li>
                <li className="flex gap-x-5">
                  Score
                  <li>Time</li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeaderboardLobby;
