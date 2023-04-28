import React from "react";
import Welcome from "./Welcome";

export function App() {
  return (
    <>
      <Welcome name="John" age={30} />
    </>
  );
}
console.log(Welcome);
