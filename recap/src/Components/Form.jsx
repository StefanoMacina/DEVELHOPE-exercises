import React from "react";
import { useState } from "react";

function Form(props) {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    birthDate: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
      
    }));
  };

  const handleReset = () => {
    setInput({
      name: "",
      lastname: "",
      birthDate: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      name: "",
      lastname: "",
      birthDate: "",
    });

    {
      input.name && input.lastname && input.birthDate
        ? console.log(input)
        : alert("completa tutti i campi");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.title}</h1>

      <label htmlFor="firstname">Firstname</label>
      <input
        type="text"
        name="name"
        value={input.name}
        onChange={handleInput}
      />

      <label htmlFor="lastname">Lastname</label>
      <input
        type="text"
        name="lastname"
        value={input.lastname}
        onChange={handleInput}
      />

      <label htmlFor="dateOfBirth">Date of birth</label>
      <input
        type="date"
        name="birthDate"
        value={input.birthDate}
        onChange={handleInput}
      />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      
    </form>
  );
}

export default Form;
