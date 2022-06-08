import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
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

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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

const Form = styled.form`
  border-style: solid;
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const EasyButton = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #e38b06;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #1d8d01;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const MediumButton = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #e38b06;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ddc515;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const HardButton = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #e38b06;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #a80e0c;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  margin-top: 0px;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

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
      <Container>
        <Title>Choose the Quizzz level</Title>

        <div className="EasyButton">
          <Wrapper>
            <Form>
              <EasyButton
                onClick={routeChange}
                type="button"
                className="easybtn"
              >
                Easy Quizz
              </EasyButton>
              <br />
              <br />
              <MediumButton type="button" className="mediumbtn">
                Medium Quizz
              </MediumButton>
              <br />
              <br />
              <HardButton type="button" className="hardbtn">
                Hard Quizz
              </HardButton>
            </Form>
          </Wrapper>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default CreateQuiz;
