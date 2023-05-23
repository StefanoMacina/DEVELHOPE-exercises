import React from "react";
import { BrowserRouter as Router, Routes, Route , Link, Outlet} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
import NotFound from "./Components/NotFound";


function App() {
  return (
    <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users/StefanoMAcina">User</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Stefano" />}></Route>
        <Route path="/Counter" element={<Counter />}></Route>
        <Route path="/users" element={<Outlet/>} >
          <Route path=":username" element={<ShowGithubUser />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
