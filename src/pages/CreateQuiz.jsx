import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function CreateQuiz() {
  const { id } = useParams();

  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/quiz/629a23583b63283836c3dfe3`;
    navigate(path);
  };
  /*   const easyQuizzz = async () => {
    try {
      const getToken = localStorage.getItem("authToken");

      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/quiz/629a23583b63283836c3dfe3`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }.then(() => {
          navigate("/");
        })
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div>
      <h3>Choose the Quizzz level</h3>
      <div className="EasyButton">
        <button onClick={routeChange} type="button" className="easybtn">
          Easy Quizz
        </button>
        <br />
        <br />
        <button type="button" className="mediumbtn">
          Medium Quizz
        </button>
        <br />
        <br />
        <button type="button" className="hardbtn">
          Hard Quizz
        </button>
      </div>
    </div>
  );
}

export default CreateQuiz;
