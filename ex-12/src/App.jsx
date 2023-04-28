import React from "react";
import { Welcome } from "./Welcome";
import { Age } from "./Age";


export function App() {
  return (
    <>
      <Welcome name="Stefano" />
      <Age age={19} />
    </>
  );
}
console.log(Welcome);
