const LeaderboardR3 = () => {
  return (
    <>
      <div className="displayArea flex flex-col gap-y-4 lg:mt-3">
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
                Name: Akash Gupta
              </li>
              <li>Email: gupta.akash123@gmail.com</li>
              <div className="hidden lg:block">
                <li className="flex gap-x-5 ">
                  Designation: IIC President
                  <li>Institute: IIMT </li>
                </li>
              </div>
              <div className="block lg:hidden">
                <li>Designation: IIC President</li>
                <li>Institute: IIMT </li>
              </div>

              <li className="flex gap-x-4 ">
                Score: 40/50
                <li>Time: 15s</li>
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
              <li className="text-[4.25vmin] lg:text-[3.25vmin]  font-bold">
                Name: Akash Gupta
              </li>
              <li>Email: gupta.akash123@gmail.com</li>
              <div className="hidden lg:block">
                <li className="flex gap-x-5 ">
                  Designation: IIC President
                  <li>Institute: IIMT </li>
                </li>
              </div>
              <div className="block lg:hidden">
                <li>Designation: IIC President</li>
                <li>Institute: IIMT </li>
              </div>

              <li className="flex gap-x-4">
                Score: 40/50
                <li>Time: 15s</li>
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
              <li className="text-[4.25vmin] lg:text-[3.25vmin]  font-bold">
                Name: Akash Gupta
              </li>
              <li>Email: gupta.akash123@gmail.com</li>
              <div className="hidden lg:block">
                <li className="flex gap-x-5 ">
                  Designation: IIC President
                  <li>Institute: IIMT </li>
                </li>
              </div>
              <div className="block lg:hidden">
                <li>Designation: IIC President</li>
                <li>Institute: IIMT </li>
              </div>

              <li className="flex gap-x-4">
                Score: 40/50
                <li>Time: 15s</li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeaderboardR3;
