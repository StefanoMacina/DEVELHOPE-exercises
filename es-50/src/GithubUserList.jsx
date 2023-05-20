import React from "react";
import { Link } from "react-router-dom";

function GithubUserList() {
  const usernames = ["Stefano", "Antonio", "Paolo"];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUserList;