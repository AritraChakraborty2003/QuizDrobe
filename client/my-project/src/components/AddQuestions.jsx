/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddQuestions = () => {
  const navigate = useNavigate();
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const round = document.getElementById("round").value;
    const opt1 = document.getElementById("opt1").value;
    const opt2 = document.getElementById("opt2").value;
    const opt3 = document.getElementById("opt3").value;
    const opt4 = document.getElementById("opt4").value;
    const correct = document.getElementById("correct").value;
    const question = document.getElementById("question").value;

    axios
      .post("http://127.0.0.1:8000/api/questions", {
        round: round,
        opt1: opt1,
        opt2: opt2,
        opt3: opt3,
        opt4: opt4,
        correct: correct,
        question: question,
      })
      .then((res) => {
        if (res.data.status === 200) {
          document.getElementById("success").innerHTML =
            "Uploaded Successfully";
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="main h-screen w-screen bg-backQuiz">
        <button
          className="bg-white text-black mt-3 ml-3 p-3"
          onClick={() => {
            navigate("/Cms");
          }}
        >
          Back
        </button>
        {localStorage.getItem("loggedinadmin") === "true" && (
          <>
            <div className="  main w-[100vw] flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mt-1">
                <div className="box h-[37vmin] md:h-[30vmin] md:w-[65vmin] w-[77vw] flex flex-col justify-center items-center p-2">
                  <img src="./VDIcon1.png"></img>
                </div>
              </div>
            </div>
            <div className="formHolder flex flex-col gap-col-4 w-[100vw] md:w-[100vw] justify-center items-center ">
              <h1 id="success" className="text-4xl pb-2 font-bold"></h1>
              <form className="flex flex-col gap-col-7 w-[100vw] md:w-[100vw] justify-center items-center">
                <select id="round" className="w-[90vw] lg:w-[80vmin] p-2">
                  <option value="">Add Round</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>{" "}
                <input
                  type="text"
                  name="questions"
                  id="question"
                  className="mt-1 w-[90vw] md:w-[80vmin] p-2 bg-white"
                  placeholder="Enter the question..."
                />
                <input
                  type="text"
                  name="option1"
                  id="opt1"
                  className="mt-1 w-[90vw] md:w-[80vmin] p-2 bg-white"
                  placeholder="Enter the option1..."
                />
                <input
                  type="text"
                  name="option2"
                  id="opt2"
                  className="mt-1 w-[90vw] md:w-[80vmin] p-2 bg-white"
                  placeholder="Enter the option2..."
                />
                <input
                  type="text"
                  name="option3"
                  id="opt3"
                  className="mt-1 w-[90vw] md:w-[80vmin] p-2 bg-white"
                  placeholder="Enter the option3..."
                />
                <input
                  type="text"
                  name="option4"
                  id="opt4"
                  className="mt-1 w-[90vw] md:w-[80vmin] p-2 bg-white"
                  placeholder="Enter the option4..."
                />
                <select
                  id="correct"
                  className="w-[90vw] lg:w-[80vmin] p-2 mt-1"
                >
                  <option value="">Add Correct Option</option>
                  <option value="a">a</option>
                  <option value="b">b</option>
                  <option value="c">c</option>
                  <option value="d">d</option>
                </select>{" "}
              </form>
            </div>
            <div className="btnHolder flex justify-center items-center">
              <button
                className="bg-bodytext text-white mt-2 p-2"
                onClick={onSubmitHandle}
              >
                Add Questions
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default AddQuestions;
