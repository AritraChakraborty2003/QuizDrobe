/* eslint-disable no-unused-vars */
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Rules from "./components/Rules";
import AddQuestions from "./components/AddQuestions";
import AddRound from "./components/AddRound";
import CmsLogin from "./components/CmsLogin";
import Login from "./components/Login";
import LeaderboardR1 from "./components/LeaderboardR1";
import ScorePage from "./components/ScorePage";
import Feedback from "./components/Feedback";
import Score from "./components/Score";
import QuizBody from "./components/QuizBody";
import Cms from "./components/Cms";
import Addadmin from "./components/AddAdmin";
import AddLeaderboard from "./components/AddLeaderboard";
import LeaderboardLobby from "./components/LeaderboardLobby";
import LeaderboardR2 from "./components/LeaderboardR2";
import LeaderboardR3 from "./components/LeaderboardR3";
import LeaderboardOverall from "./components/LeaderboardOverall";
import AddLeaderboardLogin from "./components/AddLeaderBoardLogin";
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
          <Route path="/AddRound" element={<AddRound />}></Route>
          <Route path="/ScorePage" element={<ScorePage />}></Route>
          <Route path="/AddQuestions" element={<AddQuestions />}></Route>
          <Route path="/AddLeaderboard" element={<AddLeaderboard />}></Route>
          <Route
            path="/LeaderboardLobby"
            element={<LeaderboardLobby />}
          ></Route>
          <Route path="/LeaderboardR1" element={<LeaderboardR1 />}></Route>
          <Route path="/LeaderboardR2" element={<LeaderboardR2 />}></Route>
          <Route path="/LeaderboardR3" element={<LeaderboardR3 />}></Route>
          <Route
            path="/AddLeaderboardLogin"
            element={<AddLeaderboardLogin />}
          ></Route>
          <Route
            path="/LeaderboarOverall"
            element={<LeaderboardOverall />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
