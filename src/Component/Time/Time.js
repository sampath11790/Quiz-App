import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Time = ({
  setAnswer,
  setcurrentQuestion,
  currentQuestion,
  data,
  remainingTime,
  setRemainingTime,
  score,
}) => {
  const [finised, setfinished] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (remainingTime === 0) {
      handleNextQuestion();
    }
  }, [remainingTime]);
  const handleNextQuestion = () => {
    if (Object.keys(data.questions).length - 1 != currentQuestion) {
      setcurrentQuestion((prevQuestion) => prevQuestion + 1);
      setAnswer(null);
      setRemainingTime(60);
    } else {
      // quiz is finished
      navigate("/answer", { state: score });
      setfinished("time up press submit button ");
    }
  };
  return (
    <>
      <Typography variant="h6" component="h2">
        <span style={{ color: remainingTime <= 10 ? "red" : "black" }}>
          00:{!finised ? remainingTime : finised}
        </span>{" "}
      </Typography>
    </>
  );
};

export default Time;
