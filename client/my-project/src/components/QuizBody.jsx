/* eslint-disable react/no-unescaped-entities */
const QuizBody = () => {
  const time = 300;
  return (
    <>
      <div className="h-[100vh]">
        <div className="flex ">
          <p className="mt-3 ml-3 text-[4.5vmin]">
            Welcome <span className="text-quiztext font-medium">Aritra,</span>
          </p>
          <div className="w-[44vw]  lg:w-[71vw]"></div>
          <div>
            <p className="mt-3 text-[3.45vmin]">
              <span className="text-quiztext font-medium">Time:</span> {time}s
            </p>
          </div>
        </div>

        <div className="mainArea h-[90vh] md:mt-5 flex flex-col md:justify-center  md:items-center justify-center">
          <div className="qArea w-[90vw] md:w-[67vmin] ] ml-3 border-[#939494] border-2 p-3 md:p-4 rounded-[4vmin]">
            <p className="text-[4.56vmin] md:text-[3.75vmin] font-roboton text-quiztext font-medium lg:font-semibold">
              What is India's startup governement agency?
            </p>
          </div>
          <div className="optionArea">
            <div className="space-y-3 mt-5 ">
              <div className="text-[4vmin] md:text-[3vmin] lg:text-[2.5vmin] w-[90vw] ml-3 md:w-[65vmin] border-[#cbcbcb] border-2 p-2 text-quiztext font-medium rounded-[2vmin]">
                Startup Bharat
              </div>
              <div className="text-[4vmin] md:text-[3vmin] lg:text-[2.5vmin] w-[90vw] ml-3 md:w-[65vmin] border-[#cbcbcb] border-2 p-2 text-quiztext font-medium rounded-[2vmin]">
                Startup India
              </div>
              <div className="text-[4vmin] md:text-[3vmin] lg:text-[2.5vmin] w-[90vw] ml-3 md:w-[65vmin] border-[#cbcbcb] border-2 p-2 text-quiztext font-medium rounded-[2vmin]">
                Nyay Bharat
              </div>
              <div className="text-[4vmin] md:text-[3vmin] lg:text-[2.5vmin] w-[90vw] ml-3 md:w-[65vmin] border-[#cbcbcb] border-2 p-2 text-quiztext font-medium rounded-[2vmin]">
                Bharat Business
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5 mt-3">
            <button className="bg-bodytext text-white flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-white border-2">
              Previous
            </button>
            <button className="bg-[#F7FAFF] text-bodytext flex justify-center items-center p-2 w-[25vmin] md:w-[22vmin] rounded-[2vmin] text-[4vmin] md:text-[3vmin] mt-4 border-bodytext border-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuizBody;
