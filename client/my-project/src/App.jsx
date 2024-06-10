/* eslint-disable no-unused-vars */
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
