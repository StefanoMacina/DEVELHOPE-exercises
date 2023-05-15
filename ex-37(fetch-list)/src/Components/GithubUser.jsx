import React, { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error.name);
      }
    }

    fetchUser();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.login}</h1>
    </div>
  );
}

export default GithubUser;
