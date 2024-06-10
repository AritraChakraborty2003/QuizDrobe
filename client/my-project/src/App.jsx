/* eslint-disable no-unused-vars */
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
