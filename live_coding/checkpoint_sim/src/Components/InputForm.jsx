import React, { useRef, useState } from "react";
import ButtonForm from "./ButtonForm";
import DisplayInfo from "./DisplayInfo";

function InputForm() {
  const [inputVal, setInputVal] = useState({});
  const userRef = useRef(null);
  const passRef = useRef(null);

  const handleInput = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    setInputVal({
      username: username,
      password: password,
    });
    console.log(inputVal);
  };

  const handleReset = () => {
    setInputVal({});
    (userRef.current.value = ""), (passRef.current.value = "");
  };

  return (
    <form onSubmit={handleInput}>
      <label htmlFor="username">USERNAME</label>
      <input type="text" name="username" ref={userRef} />
      <label htmlFor="password">PASSWORD</label>
      <input type="password" name="password" ref={passRef} />
      <ButtonForm reset={handleReset}/>
      <DisplayInfo el={inputVal} />
    </form>
  );
}

export default InputForm;
