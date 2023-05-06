import { useLocation, useNavigate } from "react-router-dom";
import "./Submit.css";
import { Stars } from "@mui/icons-material";
import { useEffect } from "react";
const Submition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/final", { state: location.state });
    }, 5000);
  }, []);
  return (
    <div className="submit-container">
      <div className="img-cont">
        <img
          src={
            location.state > 2
              ? "https://i.pinimg.com/originals/00/ed/7e/00ed7ea3401fe1605ecaffeca76dc7ec.gif"
              : "https://media3.giphy.com/media/h4OGa0npayrJX2NRPT/200.gif?cid=790b7611l617j33p3stxbkcw6yb9cgzu9jxu7hn0sjti12se&rid=200.gif"
          }
          alt="crk"
        ></img>
      </div>

      <p className="star-contaniner">
        <span>
          <Stars style={{ color: "yellow" }}></Stars>
        </span>
        <span style={{ fontSize: 30 }}>
          {location.state ? location.state : "0"}
        </span>
      </p>
      <h3>Karma points earned!</h3>
      <br />
      <br />
      <h3>what are karma points?</h3>
      <p>
        karma points are awarded for various actions like attempting quizzes and
        watching videos allowing you to move up the leaderboards and unlock new
        features
      </p>

      {/* <div className="img-cont">
        <img
          src="https://i.pinimg.com/originals/00/ed/7e/00ed7ea3401fe1605ecaffeca76dc7ec.gif"
          alt="crk"
        ></img>
      </div> */}
    </div>
  );
};

export default Submition;
