import React from "react";
import { Age } from "./Age";

export default function Welcome(props) {
  const { name , age} = props;
  return (
    <>
      <h1>Welcome, {name}</h1>
      {name === 'John' && age < 65 && age > 18 && <Age/>}
    </>
  );
}
