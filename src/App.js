import "./App.css";
import Navbar from "./components/Navbar";
import Loginpage from "./pages/LoginPage";
import Signuppage from "./pages/Signuppage";
import { Routes, Route } from "react-router-dom";
import IsAnon from "./components/IsAnon";
import UserProfile from "./pages/UserProfile";
import IsPrivate from "./components/IsPrivate";
import EditProfilePage from "./pages/EditProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/userprofile/:userId"
          element={
            <IsPrivate>
              <UserProfile />
            </IsPrivate>
          }
        />
        <Route
          path="/userprofile/edit/:userId"
          element={
            <IsPrivate>
              <EditProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <Signuppage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <Loginpage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
