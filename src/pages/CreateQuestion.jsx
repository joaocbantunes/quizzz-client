import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import styled, { keyframes, createGlobalStyle } from "styled-components";

const navigate = useNavigate;

function CreateQuestion() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState("");
  const [tags, setTags] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const body = { question, answers, tags, difficulty };

  const getToken = localStorage.getItem("authToken");
  axios
    .put(`${process.env.REACT_APP_API_URL}/api/quiz/:_id`, body, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    })
    .then(() => {
      setQuestion("");
      setAnswers("");
      setTags("");
      setDifficulty("");
      navigate(`/createquiz`);
    })
    .catch((err) => console.log(err));

  return (
    <div className="create-question">
      <h1>Create a question</h1>
      <form>
        <label htmlFor="question">Question?</label>
        <input type="text" name="question" value={question}></input>
        <label htmlFor="answers">Answers</label>
        <input type="text" name="answers" value={answers}></input>
      </form>
    </div>
  );
}

export default CreateQuestion;
