import React from "react";
import FilteredList from "./Components/FilteredList";

function App() {
  const list = [
    { name: "stefano", id: 1, age: 16 },
    { name: "Luca", id: 2, age: 33 },
    { name: "Antongiulio", id: 3, age: 21 },
    { name: "Antonluca", id: 4, age: 43 },
    { name: "Camilla", id: 5, age: 18 },
  ];
  return (
    <div>
      <FilteredList list={list} />
    </div>
  );
}

export default App;
