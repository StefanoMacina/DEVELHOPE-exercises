import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Counter" element={<Counter />}></Route>
        <Route path="/users/:username" element={<ShowGithubUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
