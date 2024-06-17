import { useLocation } from "react-router-dom";

const ScorePage = () => {
  const location = useLocation();
  return (
    <>
      <p>This is a score page {location.state.score}</p>
    </>
  );
};
export default ScorePage;
