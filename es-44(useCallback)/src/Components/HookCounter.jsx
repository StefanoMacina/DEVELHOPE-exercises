import React, { useState } from "react";
import useCounter from "../Hooks.jsx/useCounter";

function HookCounter({ initialValue = 0 }) {
  const { counter, handleIncrement, handleDecrement, handleReset } =
    useCounter(initialValue);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

export default HookCounter;
