import { useLocation } from "react-router-dom";

const ScorePage = () => {
  const location = useLocation();
  return (
    <>
      <div className="LargeDisplayArea hidden lg:block ">
        <div className="flex justify-center pb-2">
          <div className="flex justify-center items-center mt-[2vh] bg-backQuiz rounded-[3vmin] w-[98vw] h-[96vh]">
            <div>
              <p className="text-6xl pb-3">{location.state.userData.name},</p>
              <p className="text-5xl pb-2">
                Your Score is: {location.state.score}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="h-[100vh] bg-gradient-to-bl from-[#9ed8ff] to-backQuiz  lg:bg-gradient-to-tr lg:from-background lg:to-background font-roboto main w-[100vw] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-1">
            <p className="text-6xl pb-3 font-bold">
              {location.state.userData.name},
            </p>
            <p className="text-4xl">Your Score is: {location.state.score} </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScorePage;
