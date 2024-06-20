/* eslint-disable react/prop-types */
const LeaderboardR2 = (props) => {
  const data = props.data;
  const Firstdata = data.filter((user) => user.round === 2);
  const ScoreData = Firstdata.sort((a, b) => b.score - a.score);
  const Top3Data = ScoreData.slice(0, 3);

  const SortTime = (data) => {
    if (data[0].score === data[1].score) {
      if (data[2].score === data[0].score) {
        const UpdatedData = data.sort((a, b) => a.time - b.time);
        return UpdatedData;
      } else {
        let UpdatedData = data.slice(0, 2).sort((a, b) => a.time - b.time);
        UpdatedData.push(data[2]);
        return UpdatedData;
      }
    } else if (data[1].score === data[2].score) {
      let UpdatedData = [];
      UpdatedData.push(data[0]);
      UpdatedData = data.slice(1, 3).sort((a, b) => a.time - b.time);
      return UpdatedData;
    }
  };

  const FinalResult = SortTime(Top3Data);

  console.log(FinalResult);
  return (
    <>
      <div className="displayArea flex flex-col gap-y-4 lg:mt-3">
        <>
          <div className="firstBox flex justify-center gap-x-4 ">
            <div className="imageArea w-[25vmin] h-[25vmin]">
              <img
                src="./First.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>

            <div className="textArea w-[70vmin] lg:w-[90vmin] lg:mt-2 ">
              <ul className="text-[4vmin] lg:text-[3vmin] font-medium">
                <li className="text-[4.25vmin]  lg:text-[3.25vmin] font-bold">
                  Name: {FinalResult[0].name}
                </li>
                <li>Email: {FinalResult[0].email}</li>
                <div className="hidden lg:block">
                  <li className="flex gap-x-5 ">
                    Designation: {FinalResult[0].designation}
                    <li>Institute: {FinalResult[0].institute} </li>
                  </li>
                </div>
                <div className="block lg:hidden">
                  <li>Designation: {FinalResult[0].designation}</li>
                  <li>Institute: {FinalResult[0].institute} </li>
                </div>

                <li className="flex gap-x-4 ">
                  Score: {FinalResult[0].score} /50
                  <li>Time: {FinalResult[0].time}s</li>
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
            <div className="textArea w-[70vmin] lg:w-[90vmin] lg:mt-6">
              <ul className="text-[4vmin] lg:text-[3vmin] font-medium">
                <li className="text-[4.25vmin]  lg:text-[3.25vmin] font-bold">
                  Name: {FinalResult[1].name}
                </li>
                <li>Email: {FinalResult[1].email}</li>
                <div className="hidden lg:block">
                  <li className="flex gap-x-5 ">
                    Designation: {FinalResult[1].designation}
                    <li>Institute: {FinalResult[1].institute} </li>
                  </li>
                </div>
                <div className="block lg:hidden">
                  <li>Designation: {FinalResult[1].designation}</li>
                  <li>Institute: {FinalResult[1].institute} </li>
                </div>

                <li className="flex gap-x-4 ">
                  Score: {FinalResult[1].score} /50
                  <li>Time: {FinalResult[1].time}s</li>
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
            <div className="textArea w-[70vmin] lg:w-[90vmin] lg:mt-6">
              <ul className="text-[4vmin] lg:text-[3vmin] font-medium">
                <li className="text-[4.25vmin]  lg:text-[3.25vmin] font-bold">
                  Name: {FinalResult[2].name}
                </li>
                <li>Email: {FinalResult[2].email}</li>
                <div className="hidden lg:block">
                  <li className="flex gap-x-5 ">
                    Designation: {FinalResult[2].designation}
                    <li>Institute: {FinalResult[2].institute} </li>
                  </li>
                </div>
                <div className="block lg:hidden">
                  <li>Designation: {FinalResult[2].designation}</li>
                  <li>Institute: {FinalResult[2].institute} </li>
                </div>

                <li className="flex gap-x-4 ">
                  Score: {FinalResult[2].score} /50
                  <li>Time: {FinalResult[2].time}s</li>
                </li>
              </ul>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default LeaderboardR2;
