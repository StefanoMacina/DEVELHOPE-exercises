import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return ()=> clearInterval(id);
  }, );

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
