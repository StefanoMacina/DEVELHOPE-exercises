import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function CarDetails({ initialData = { model: "car", year: "2020", color: "orange" } }) {
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();
  const formRef = useRef();

  

  useEffect(() => {
    modelRef.current.defaultValue = 'car';
    yearRef.current.defaultValue = 2020;
    colorRef.current.defaultValue = 'orange';
    formRef.current.reset();
    formRef.current.elements.model.focus()
  }, [initialData]);


  return (
    <form ref={formRef}>
      <input type="text" name="model" ref={modelRef} />
      <input type="text" name="year" ref={yearRef} />
      <input type="text" name="color" ref={colorRef} />
      <button type="submit">submit</button>
    </form>
  );
}

export default CarDetails;
