import React, { useState } from "react";
import { quizData } from "../data/quizData";
// import Result from "./Result";

const Quiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < quizData.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === quizData[currentQuestion].answer + 1) {
      setScore(score + 1);
    }
    console.log(score);
  };

  return (
    <>
      <div
        className="d-flex ms-5"
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="container d-flex mx-auto"
          style={{
            boxShadow: "1px 1px 10px #878778",
            flexDirection: "column",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          {showResult ? (
            <div>
              <h3>Congratulations!!!! You have scored <span className="fw-bold text-success">{score}</span> out of <span className="fw-bold text-danger">{quizData.length}</span></h3>
            </div>
          ) : (
            <>
              <div>
                <h4>
                  {currentQuestion + 1}. {quizData[currentQuestion].question}
                </h4>
                <hr />
                <div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {quizData[currentQuestion].options.map((m, i) => {
                      return (
                        <button
                          className={`btn ${
                            clickedOption == i + 1 ? "btn-warning" : ""
                          }`}
                          key={i}
                          onClick={() => setClickedOption(i + 1)}
                        >
                          {m}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button onClick={changeQuestion}>next</button>
              <div className="mt-3">
                <p>
                Question {currentQuestion + 1} out of {quizData.length}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
