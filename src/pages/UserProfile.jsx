import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

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
      console.log(response.data.profileImage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  /*   const handleFileUpload = (e) => {

    const uploadData = new FormData();
    uploadData.append("profileImage", e.target.files[0]);

    authService
      .uploadPhoto(uploadData)
      .then((response) => {
        const uploadedImageUrl = response.secure_url;
        return authService.editUser(uploadedImageUrl);
      })
      .then((data) => {
        setImage(data.user.image);
      })
      .then(() => {})
      .catch((err) => console.log("Error while uploading the file: ", err));
  }; */

  return (
    <div>
      {user && (
        <div>
          <h1> Welcome to your profile: {user.username}</h1>

          <img src={image} alt="profileImage" />
          <br />
          <Link to={`/userprofile/edit/${user._id}`}>
            <button> Edit your profile </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
