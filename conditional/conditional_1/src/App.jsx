import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import SingleProfile from "./pages/SingleProfile";

function App() {
  return (
    <>
      <nav className="border">
        <ul className="d-flex flex-row justify-content-center gap-5">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Profile">PROFILE</Link>
          </li>
          <li>
            <Link to="/Profile/1">PROFILE 1</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />}>
          <Route path="/Profile/:id" element={<SingleProfile />} />
          <Route path="/Profile/:me" element={<SingleProfile />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
