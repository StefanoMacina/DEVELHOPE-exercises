import React from "react";
import { BrowserRouter as Router, Routes, Route , Link, Outlet} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
import NotFound from "./Components/NotFound";
import GithubUserList from "./Components/GithubUserList";
import { GithubUserListIndex } from "./Components/GithubUserListIndex";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome name="Stefano" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<GithubUserListIndex />} />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
