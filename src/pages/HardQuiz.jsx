import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const Container = styled.section`
  background-color: #000000;
  //background-position: center;
  //background-repeat: no-repeat;
  //background-size: cover;
  //height: 100vh;
  @media only screen and (max-width: 1600px) {
    height: 80vh;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  max-width: 100%;
  padding: 20px 20px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #e38b06;
  border: solid 1px;
  border-spacing: 10px;
  border-radius: 10px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #865000;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Form = styled.form`
  border-style: solid;
  margin: 0 auto;
  width: 100%;
  max-width: 904px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Table = styled.table`
  border-style: solid;
  margin: 0 auto;
  width: 100%;
  max-width: 904px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-weight: normal;
  margin-top: 10px;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const P = styled.p`
  margin-top: 10px;
  color: #ffffff;
`;

function ShowQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const token = localStorage.getItem("authToken");

  const navigate = useNavigate();

  const getQuiz = async () => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/quiz-hard`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQuiz(response.data.questions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

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

  return (
    <>
      {quiz.length > 0 && (
        <div className="">
          <Container>
            {showScore ? (
              <div className="score-section">
                <Table>
                  <Title>
                    You answered correctly {score} out of 10 questions!
                  </Title>
                </Table>
              </div>
            ) : (
              <>
                <Form>
                  <div className="question-section">
                    <div className="question-text">
                      <Title>
                        <strong>Question:</strong>
                      </Title>
                      <Title> {quiz[currentQuestion].question}</Title>
                    </div>
                  </div>
                </Form>
                <Table>
                  <div className="answer-section">
                    <Title>Answer:</Title>
                    {quiz[currentQuestion].answers.map((answerOption) => (
                      <Button
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answer}
                      </Button>
                    ))}

                    <P>Progress: {currentQuestion} / 10</P>
                  </div>
                </Table>
              </>
            )}
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}

export default ShowQuiz;
