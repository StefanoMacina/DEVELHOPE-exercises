import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Welcome" element={<Welcome name="Stefano" />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
