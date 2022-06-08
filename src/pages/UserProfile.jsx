import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100%;
  width: 100%;
`;

const Button = styled.button`
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
    background: #865000;
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

function ProfilePage() {
  // const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [image, setImage] = useState("");

  const getProfile = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setUser(response.data);
      setImage(response.data.profileImage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Container>
        {user && (
          <div>
            <Title>
              {" "}
              Welcome to your profile: <strong>{user.username}</strong>
            </Title>
            <Wrapper>
              <Form>
                <img src={image} alt="profileImage" />
                <br />
                <Link to={`/userprofile/edit/${user._id}`}>
                  <Button> Edit your profile </Button>
                </Link>
              </Form>
            </Wrapper>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default ProfilePage;
