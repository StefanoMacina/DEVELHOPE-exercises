import React, { useEffect, useRef, useState } from "react";

function Fetch({ username }) {
  const [user, fetchUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => fetchUser(data));
    console.log(user);
  }, []);

  return (
    <div>
      <p>{user.id}</p>
      <h2>{user.login}</h2>
      <div>
        <img src={user.avatar_url} alt="stefano macina" width={200} />
      </div>
      <p>Followers : {user.followers}</p>
    </div>
  );
}

export default Fetch;
