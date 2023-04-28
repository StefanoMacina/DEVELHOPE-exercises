import React from "react";

export function Age(props) {
  const { age } = props;
  return (
    <>{age > 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}</>
  );
}
