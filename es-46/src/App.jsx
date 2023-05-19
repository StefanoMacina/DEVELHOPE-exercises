import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Counter from "./counter";
import Hello from "./hello";
import Nav from "./Nav";

function App() {
  return (
    <>
    <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/hello" element={<Hello/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
