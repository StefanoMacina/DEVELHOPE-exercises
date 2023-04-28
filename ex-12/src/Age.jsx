import React from "react";

export function Age(props) {
  const { age } = props;
  return <>{ age > 18 && age < 65 && <p>Your age is {age}</p>}</>;
}
