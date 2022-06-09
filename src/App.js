import "./App.css";
import Navbar from "./components/Navbar";
import Loginpage from "./pages/LoginPage";
import Signuppage from "./pages/Signuppage";
import { Routes, Route } from "react-router-dom";
import IsAnon from "./components/IsAnon";
import UserProfile from "./pages/UserProfile";
import IsPrivate from "./components/IsPrivate";
import EditProfilePage from "./pages/EditProfile";
import CreateQuiz from "./pages/CreateQuiz";
import ShowQuiz from "./pages/ShowQuiz";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";
import CreateQuestion from "./pages/CreateQuestion";
import Particles from "./components/Particles";
import MediumQuiz from "./pages/MediumQuiz";
import HardQuiz from "./pages/HardQuiz";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Particles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/quiz-easy"
          element={
            <IsPrivate>
              <ShowQuiz />
            </IsPrivate>
          }
        >
          {" "}
        </Route>
        <Route
          path="/quiz-medium"
          element={
            <IsPrivate>
              <MediumQuiz />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/quiz-hard"
          element={
            <IsPrivate>
              <HardQuiz />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/userprofile"
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
          path="/createquiz/"
          element={
            <IsPrivate>
              <CreateQuiz />
            </IsPrivate>
          }
        />
        <Route
          path="/createquestion/"
          element={
            <IsPrivate>
              <CreateQuestion />
            </IsPrivate>
          }
        />
        <Route
          path="/quiz/:id"
          element={
            <IsPrivate>
              <ShowQuiz />
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
