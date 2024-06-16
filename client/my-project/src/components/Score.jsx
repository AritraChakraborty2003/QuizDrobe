import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
const Score = () => {
  const location = useLocation();
  const udata = location.state.userData;
  const score = location.state.score;

  return (
    <>
      <p>
        {udata.name} your score is {score}
      </p>
    </>
  );
};
export default Score;
