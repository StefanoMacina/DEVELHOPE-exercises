import React, { useEffect, useState } from "react";
import axios from "axios";

function GithubUser({ username }) {
  const [user, setUser] = useState({});

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      setUser(response.data);
    } catch (error) {
      console.log(error.name);
    }
  }

  useEffect(() => {
    fetchData();
  }, [username]);

  return <div>{user.login}</div>;
}

export default GithubUser;
