import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function CarDetails({ initialData = { model: "car", year: "2020", color: "orange" } }) {
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();

  useEffect(() => {
    modelRef.current.defaultValue = initialData.model;
    yearRef.current.defaultValue = initialData.year;
    colorRef.current.defaultValue = initialData.color;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = {
        model: modelRef.current.value,
        year: yearRef.current.value,
        color: colorRef.current.value,
    }
    e.target.reset()
    console.log(formInput);

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="model" ref={modelRef} />
      <input type="text" name="year" ref={yearRef} />
      <input type="text" name="color" ref={colorRef} />
      <button type="submit">submit</button>
    </form>
  );
}

export default CarDetails;
