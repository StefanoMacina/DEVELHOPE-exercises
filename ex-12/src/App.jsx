import React from "react";
import { Welcome } from "./Welcome";
import { Age } from "./Age";

export function App(){
  return(
    <>
    <Welcome name = "John" />
    <Age age = {64}/>
    </>
  )
}