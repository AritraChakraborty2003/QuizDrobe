/* eslint-disable no-unused-vars */
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Rules from "./components/Rules";
import CmsLogin from "./components/CmsLogin";
import Login from "./components/Login";
import Feedback from "./components/Feedback";
import Score from "./components/Score";
import QuizBody from "./components/QuizBody";
import Cms from "./components/Cms";
import Addadmin from "./components/AddAdmin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/AddAdmin" element={<Addadmin />}></Route>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/Cms" element={<Cms />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
          <Route path="/quizBody" element={<QuizBody />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/CmsLogin" element={<CmsLogin />}></Route>
          <Route path="/Score" element={<Score />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
