import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function EditProfilePage() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);

  const getProfile = async () => {
    try {
      const getToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h1>Edti your profile</h1>
          <h1> Welcome {user.username}</h1>
          <h1> Welcome {user.email}</h1>
          <Link to={`/userprofile/edit/${user._id}`}>
            <button> Edit your profile </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default EditProfilePage;
