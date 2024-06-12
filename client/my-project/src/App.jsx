/* eslint-disable no-unused-vars */
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Rules from "./components/Rules";
import CmsLogin from "./components/CmsLogin";
import Login from "./components/Login";
import Feedback from "./components/Feedback";
import QuizBody from "./components/QuizBody";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
          <Route path="/quizBody" element={<QuizBody />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/CmsLogin" element={<CmsLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
