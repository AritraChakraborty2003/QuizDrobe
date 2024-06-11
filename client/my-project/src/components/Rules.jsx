import "./main.css";
const Rules = () => {
  return (
    <>
      <div className="bg-background mainBody w-screen md:h-screen flex flex-col justify-center items-center ">
        <div className="rulesBody p-2  w-[92vw] lg:w-[70vmin] border-rulebody border-2 bg-rulebody rounded-2xl  mt-5 pb-5 ">
          <ul className="mt-4 bg-rulebody ">
            <li className="w-full flex justify-center items-center bg-rulebody">
              <button className="bg-bodytext text-white flex justify-center items-center p-2 md:w-[27vmin] rounded-2xl text-[6vmin] md:text-[3vmin]">
                Quiz Rules
              </button>
            </li>
            <li className="flex flex-col space-y-4 ml-8 mt-4 bg-rulebody">
              <li className="bg-rulebody">
                1. Each Question of the quiz carries 10 marks
              </li>
              <li className="bg-rulebody">
                2. Winners will recieve certificates and goodies from
                VentureDrobe and IIC
              </li>
              <li className="bg-rulebody">
                3. Plagiarism or cheating of any means is strictly restricted
              </li>
              <li className="bg-rulebody">
                4. There is in total 5 questions from the current discussed
                topic
              </li>
              <li className="bg-rulebody">
                5. At the end of quiz please fill the feedback form for rating
                plaform and event experience
              </li>
              <li className="bg-rulebody">
                6. After the feedback form the personal score will be displayed
                out of 50
              </li>
              <li className="bg-rulebody">
                7. Scores of each round will be evaluated to declare overall
                winner
              </li>
            </li>
          </ul>
        </div>
        <button className="bg-bodytext text-white flex justify-center items-center p-1 w-[30vmin] md:w-[27vmin] rounded-2xl text-[6vmin] md:text-[3vmin] mt-4">
          next
        </button>
      </div>
    </>
  );
};
export default Rules;
