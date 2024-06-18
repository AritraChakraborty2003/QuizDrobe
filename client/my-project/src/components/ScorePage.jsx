import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ScorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state.score;
  const name = location.state.userData.name.split()[0];

  const onSubmitHandle = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "attempted", {
        name: location.userData.name,
        email: location.userData.email,
        round: location.userData.round,
        attempted: "true",
      })
      .then((response) => {
        if (response.data.status === 200) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="LargeDisplayArea hidden lg:block ">
        <div className="flex justify-center pb-2">
          <div className="flex justify-center items-center mt-[2vh] bg-backQuiz rounded-[3vmin] w-[98vw] h-[96vh]">
            <div className="flex flex-col items-center">
              <p className="text-[11vmin] pb-3 text-bodytext font-semibold">
                Hey, <span className="text-[12vmin]">{name}</span>
              </p>

              {score <= 25 && (
                <div className="flex justify-center items-center">
                  <div className="h-[30vmin] w-[30vmin] ">
                    <img
                      src="./sad.webp"
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                </div>
              )}

              {score > 25 && score <= 35 && (
                <div className="flex justify-center items-center">
                  <div className="h-[30vmin] w-[30vmin] ">
                    <img
                      src="./nface.png"
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                </div>
              )}

              {score >= 35 && (
                <div className="flex justify-center items-center">
                  <div className="h-[30vmin] w-[30vmin] ">
                    <img
                      src="./happy.webp"
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                </div>
              )}
              <p className="text-[7.5vmin] pb-3 text-bodytext font-semibold mt-1">
                Your score: <span className="text-[6.75vmin]">{score}/50</span>
              </p>
              <p className="text-[4.5vmin] pb-3 text-bodytext font-semibold mt-1">
                {score <= 25 && (
                  <div className="flex justify-center items-center">
                    <p className="text-[4.75vmin]">
                      Best of Luck for next round
                    </p>
                  </div>
                )}
                {score > 25 && score <= 35 && (
                  <div className="flex justify-center items-center">
                    <p className="text-[4.75vmin]">
                      Good Score! you can perform better
                    </p>
                  </div>
                )}
                {score > 35 && (
                  <div className="flex justify-center items-center">
                    <p className="text-[4.75vmin]">
                      Excellent!Keep it up for future rounds
                    </p>
                  </div>
                )}
              </p>

              <div className="btnHolder flex justify-center items-center">
                <button
                  className="p-3 bg-bodytext text-white text-[3.5vmin]"
                  onClick={onSubmitHandle}
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="h-[100vh] bg-gradient-to-bl from-[#9ed8ff] to-backQuiz  lg:bg-gradient-to-tr lg:from-background lg:to-background font-roboto main w-[100vw] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-1">
            <div className="flex flex-col items-center">
              <p className="text-[11vmin] pb-3 text-bodytext font-semibold">
                Hey, <span className="text-[12vmin]">Aritra</span>
              </p>

              {score <= 25 && (
                <div className="flex justify-center items-center">
                  <div className="h-[30vmin] w-[30vmin] ">
                    <img
                      src="./sad.webp"
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                </div>
              )}

              {score > 25 && score <= 35 && (
                <div className="flex justify-center items-center">
                  <div className="h-[30vmin] w-[30vmin] ">
                    <img
                      src="./nface.png"
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                </div>
              )}

              {score >= 35 && (
                <div className="flex justify-center items-center">
                  <div className="h-[30vmin] w-[30vmin] ">
                    <img
                      src="./happy.webp"
                      className="max-w-full max-h-full object-contain"
                    ></img>
                  </div>
                </div>
              )}
              <p className="text-[7.5vmin] pb-3 text-bodytext font-semibold mt-1">
                Your score: <span className="text-[6.75vmin]">{score}/50</span>
              </p>
              <p className="text-[4.5vmin] pb-3 text-bodytext font-semibold mt-1">
                {score <= 25 && (
                  <div className="flex justify-center items-center">
                    <p className="text-[5.75vmin]">
                      Best of Luck for next round
                    </p>
                  </div>
                )}
                {score > 25 && score <= 35 && (
                  <div className="flex justify-center items-center">
                    <p className="text-[5.75vmin]">
                      Good Score! you can perform better
                    </p>
                  </div>
                )}
                {score > 35 && (
                  <div className="flex justify-center items-center">
                    <p className="text-[5.75vmin]">
                      Excellent!Keep it up for future rounds
                    </p>
                  </div>
                )}
              </p>

              <div className="btnHolder flex justify-center items-center">
                <button
                  className="p-3 bg-bodytext text-white text-[3.5vmin]"
                  onClick={onSubmitHandle}
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScorePage;
