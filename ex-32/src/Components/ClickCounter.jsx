import React from "react";
import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>ADD TO COUNTER</button>
    </>
  );
}

export default ClickCounter;
