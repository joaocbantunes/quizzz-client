import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function ShowQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const navigate = useNavigate();

  const getQuiz = async () => {
    try {
      const getToken = localStorage.getItem("authToken");

      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setQuiz(response.data.questions);
      //console.log(response.data.questions[0].answers[0].answer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  /* const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  }; */

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  /* const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("Answer choosen");

    if (a == "true") {
      setScore(score + 1);
      setSelectedAnswer(null);
    } else {
      setScore(score - 1);
    }
  }; */

  /* const handleScore = () => {
    setQuiz(null);
  }; */

  return (
    <>
      {quiz.length > 0 && (
        <div className="">
          {showScore ? (
            <div className="score-section">
              <h3>
                You answered correctly {score} out of {quiz.length} questions!
              </h3>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-text">
                  <h3> {quiz[currentQuestion].question}</h3>
                </div>
              </div>
              <div className="answer-section">
                {quiz[currentQuestion].answers.map((answerOption) => (
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answer}
                  </button>
                ))}
                <p>Progress: {currentQuestion} / 10</p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ShowQuiz;
