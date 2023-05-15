import React, { useState } from "react";

//custom hook con logica 
export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const handleCountIncrement = () => {
    setCounter((c) => c + 1);
  };
  const handleCounterDecrement = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };
  return {
    counter: counter,
    onIncrement: handleCountIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleReset,
  };
}
