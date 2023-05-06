import React from "react";
import cls from "./Finalpage.module.css";
import { ShareRounded } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
const FinalPage = ({ porps }) => {
  const { state } = useLocation();
  let avgescorePercentage = (Number(state) * 100) / 5;

  return (
    <div className={cls.maincontainer}>
      <h3>The Daily javascript Quiz</h3>
      <div className={cls.imagecontainer}>
        <span style={{ color: "green" }}>Your Score:</span>
        <span className={cls.valuesize}>
          {avgescorePercentage ? avgescorePercentage : 0}%
        </span>

        {/* <img></img> */}
        <h4>Oh Snap,You can do better! </h4>
        <span>
          success is not final,failure is not fatal. It is the courage to
          continue that counts
        </span>
      </div>
      <div className={cls.markscontainer}>
        <div className={cls.finalmarks}>
          <span>
            your score
            <span className={cls.valuesize}> 2/5</span>
          </span>
          <span>avg :2 marks</span>
        </div>
        <div className={cls.totaltime}>
          <span>
            <span>Time Taken </span>
            <span className={cls.valuesize}>0.09 min</span>
          </span>
          <span>avg 00.59 mins</span>
        </div>
      </div>
      <div>
        <span className={cls.valuesize}>Seekho</span>
      </div>
      <div className={cls.shareicon}>
        <ShareRounded
          style={{ color: "purple", marginRight: 10 }}
        ></ShareRounded>
        share it with your friends!
      </div>
    </div>
  );
};

export default FinalPage;
