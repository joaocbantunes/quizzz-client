import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function EditProfilePage() {
  const { userId } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async () => {
    try {
      await axios.delete(`http://localhost:5005/api/user/${userId}/delete`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, email };

    axios
      .put(`http://localhost:5005/api/user/${userId}`, body)
      .then(() => {
        setUsername("");
        setEmail("");
        navigate(`/userprofile/${userId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditUserProfile">
      <h1>Edit your profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Change username</label>
        <input
          type="text"
          name="user"
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor="description">Change Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <button type="submit">Edit</button>
      </form>
      <br />
      <button onClick={deleteProfile}>Delete your profile</button>
    </div>
  );
}

export default EditProfilePage;
