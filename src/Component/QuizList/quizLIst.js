import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import data from "../Data/data";
import Time from "../Time/Time";
import "./quizList.css";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [Answer, setAnswer] = useState(null);
  const [score, setscore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(60);
  const navigate = useNavigate();

  function handleClick() {
    // alert("some");
    const isconfirm = window.confirm("Are you sure to submit this test?");
    if (isconfirm) {
      navigate("/answer", { state: score });
    }
    return;
  }
  const RadiobuttonHandler = (e) => {
    setAnswer(e.target.value);
  };
  const handleNextQuestion = () => {
    if (Answer == data.questions[currentQuestion].correctIndex) {
      setscore((p) => p + 1);
    }
    setAnswer(null);
    if (currentQuestion + 1 <= data.questions.length) {
      setRemainingTime(60);
      setcurrentQuestion(currentQuestion + 1);
    }
  };
  // const submitHandler = () => {};
  // console.log("score", score);
  const answerIcons = ["A", "B", "C", "D"];
  return (
    <Box
      sx={{
        background: "light",
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "center" },
        flexDirection: "column",
        marginTop: 15,
      }}
    >
      <h2>Ongoing javascript test</h2>
      <div className="time-qustion-length">
        <div className="time">
          <Time
            score={score}
            remainingTime={remainingTime}
            setRemainingTime={setRemainingTime}
            setAnswer={setAnswer}
            setcurrentQuestion={setcurrentQuestion}
            currentQuestion={currentQuestion}
            data={data}
          ></Time>
        </div>
        <div className="qustion-length">
          <Typography variant="h6">
            {currentQuestion + 1} / {data.questions.length}
          </Typography>
        </div>
      </div>
      <div className="qustion">
        <Typography variant="h6">
          {data.questions[currentQuestion].question}
        </Typography>
        {/* <p>{data.questions[currentQuestion].question}</p> */}
      </div>
      <FormControl>
        <FormLabel>Select</FormLabel>

        <RadioGroup
          aria-labelledby="quiz"
          value={Answer}
          name="quiz"
          onChange={RadiobuttonHandler}
        >
          {console.log(Answer)}
          {data.questions[currentQuestion].answers.map((answer, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={
                <Box display="flex" alignItems="center" width="260px">
                  <Box width="200px">
                    <span>{answer}</span>
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 1,
                      marginLeft: 2,
                    }}
                  >
                    {answerIcons[index]}
                  </Box>
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
      {Object.keys(data.questions).length - 1 != currentQuestion && (
        <Box>
          <Button
            variant="contained"
            sx={{ borderRadius: 5, marginTop: 5 }}
            onClick={handleNextQuestion}
          >
            next
          </Button>
        </Box>
      )}
      {console.log(
        "key",
        Object.keys(data.questions).length - 1 == currentQuestion
      )}
      {Object.keys(data.questions).length - 1 == currentQuestion && (
        <Box>
          <Button
            variant="contained"
            sx={{ borderRadius: 5 }}
            // variant="primary"
            // sx={{ background: "blue" }}
            onClick={handleClick}
          >
            submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default QuizList;
