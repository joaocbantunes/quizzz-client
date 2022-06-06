import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function ShowQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

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
      setQuiz(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <>
      {quiz &&
        quiz.questions.map((item) => {
          return (
            <form key={item._id} className="itemCard card">
              <h3>{item.question}</h3>
              {item.answers.map((answeroption) => {
                return <p>{answeroption.answer}</p>;
              })}
            </form>
          );
        })}
    </>
  );
}

export default ShowQuiz;
