import { Navigate, useNavigate } from "react-router-dom";

const Cms = () => {
  const navigate = useNavigate();
  return (
    <>
      {(localStorage.getItem("loggedinadmin") === "true" && (
        <>
          <button
            onClick={() => {
              localStorage.removeItem("name");
              localStorage.removeItem("email");

              localStorage.removeItem("password");
              localStorage.removeItem("loggedinadmin");
              navigate("/CmsLogin");
            }}
            className="bg-white text-black mt-3 ml-3 p-3"
          >
            Logout
          </button>
          <div className="h-[80vh] flex justify-center items-center mt-5">
            <div className="flex justify-center items-center space-y-3 lg:space-y-0 lg:space-x-7 flex-wrap">
              <div className="card h-[50vmin] w-[60vmin] bg-white flex flex-col justify-center items-center p-2">
                <div className="imageHolder h-[40vmin] w-[50vmin] flex flex-col justify-center items-center bg-white">
                  <img
                    src="./addAdmin.avif"
                    className="max-w-full max-h-full object-contain bg-white"
                  ></img>
                </div>

                <button
                  className="bg-bodytext text-white p-2"
                  onClick={() => {
                    navigate("/addAdmin");
                  }}
                >
                  Add Admin
                </button>
              </div>
              <div className="card h-[50vmin] w-[60vmin] bg-white">
                <div className="card h-[50vmin] w-[60vmin] bg-white flex flex-col justify-center items-center  p-2">
                  <div className="imageHolder h-[40vmin] w-[50vmin] flex justify-center items-center bg-white">
                    <img
                      src="./addQuest.avif"
                      className="max-w-full max-h-full object-contain bg-white"
                    ></img>
                  </div>
                  <button className="bg-bodytext text-white p-2">
                    Add Questions
                  </button>
                </div>
              </div>
              <div className="card h-[50vmin] w-[60vmin] bg-white">
                <div className="card h-[50vmin] w-[60vmin] bg-white flex flex-col justify-center items-center">
                  <div className="imageHolder h-[40vmin] w-[50vmin] flex justify-center items-center bg-white">
                    <img
                      src="./addRound.jpeg"
                      className="max-w-full max-h-full object-contain bg-white"
                    ></img>
                  </div>
                  <button className="bg-bodytext text-white p-2">
                    Add Round
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )) || <Navigate to="/CmsLogin"></Navigate>}
    </>
  );
};
export default Cms;
