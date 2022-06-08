import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import styled, { keyframes, createGlobalStyle } from "styled-components";

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
  @media only screen and (max-width: 1200px) {
    height: 100vh;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin-top: 20px;
  border-style: solid;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #e38b06;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
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

const Label = styled.label`
  color: #ffffff;
`;

const Title = styled.h2`
  font-weight: normal;
  margin-top: 0px;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

function EditProfilePage() {
  const { userId } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  // GET PROFILE INFO

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
      setUsername(response.data.username);
      setEmail(response.data.email);
      setImage(response.data.profileImage);
    } catch (error) {
      console.log(error);
    }
  };

  // DELTE USER PROFILE

  const deleteProfile = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/user/${userId}/delete`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      localStorage.removeItem("authToken");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // CHANGE USER PROFILE IMAGE

  const handleFileUpload = (e) => {
    setIsUploading(true);
    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    const getToken = localStorage.getItem("authToken");

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((response) => {
        setIsUploading(false);
        setImage(response.data.fileUrl);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const uploadHandler = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isUploading) {
      alert("File still uploading");
      return;
    }

    const body = { username, email, image };

    const getToken = localStorage.getItem("authToken");
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/user/${userId}`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then(() => {
        setUsername("");
        setEmail("");
        setImage("");
        navigate(`/userprofile`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditUserProfile">
      <Container>
        <Title>Edit your profile</Title>
        <Wrapper>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="title">Change Username</Label>
            <Input
              type="text"
              name="user"
              value={username}
              onChange={handleUsername}
            />
            <Label htmlFor="description">Change Email</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <br />
            <img src={image} alt="" />
            <Label htmlFor="description">Change Your Profile Image</Label>
            <Input type="file" onChange={handleFileUpload} />
            <Button type="submit">Edit your info</Button>
          </Form>
        </Wrapper>
        <br />
        <Button onClick={deleteProfile}>Delete your profile</Button>
      </Container>
    </div>
  );
}

export default EditProfilePage;
