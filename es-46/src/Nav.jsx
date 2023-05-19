import React from "react";
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/Hello">Hello</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
