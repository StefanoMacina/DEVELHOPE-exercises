import React from "react";
import { useState } from "react";

function TodoList() {
  const [items, setItems] = useState(["el1", "el2", "el3"]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setItems((items) => {
      return [...items, inputValue];
    });
    setInputValue("");
  };

  const handleRemove = (index) => {
    setItems((prevItems) => {
      return prevItems.filter((_, i) => i !== index);
    });
  };
  return (
    <div>
      <ul>
        {items.map((el, i) => (
          <li key={i}>
            {el}
            <button onClick={() => handleRemove(i)}>REMOVE</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={inputValue} onChange={handleInputValue} />
        <button onClick={handleClick}>ADD</button>
      </div>
    </div>
  );
}

export default TodoList;