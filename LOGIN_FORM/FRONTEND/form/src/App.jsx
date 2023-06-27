import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({
    user: "",
    password: "",
  });

    
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", {
        data: data,
      });
      console.log(response.data);

      setData({
        user: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  

  const handleData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handlePost}>
      <input type="text" name="user" value={data.user} onChange={handleData} />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleData}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default App;
