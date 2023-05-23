import React, { useState } from "react";

function TodoList({ render }) {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleItems = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setItems([]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleItems}>CLICK TO ADD</button>
      <button onClick={handleReset}>CLICK TO RESET</button>
      {render(items, handleRemoveItem)}
    </div>
  );
}

export default TodoList;
