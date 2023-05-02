import React from "react";
import { Age } from "./Age";

export default function Welcome(props) {
  const { name } = props;
  return (
    <>
      <h1>Welcome, {name}</h1>
      {name === 'John' && <Age age={24}/>}
    </>
  );
}
