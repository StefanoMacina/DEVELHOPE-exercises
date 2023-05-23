import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount((c) => c + 1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default Counter;
