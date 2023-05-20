import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import Welcome from "./Welcome";
import {Link} from 'react-router-dom'

function App() {
  return (
    <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Counter'>Counter</Link></li>
      <li><Link to='/users/StefanoMacina'>user</Link></li>
    </ul>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
        <Route path="/users/:username" element={<ShowGithubUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
