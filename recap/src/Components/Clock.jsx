import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Clock(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const int = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(int);
    };
  });

  return (
    <>
      <h4>
        {props.title}
        <div>{time.toLocaleTimeString()}</div>
      </h4>
    </>
  );
}

export default Clock;
