import React from "react";

export function Welcome(props) {
  const { name , age } = props;
  return (
    <>
      <h1>Welcome, {name}</h1>
      {name =='John' && age > 18 && age < 65 && <p>Your age is {age}</p>}
    </>
  );
}
