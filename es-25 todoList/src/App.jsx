import React, { useLayoutEffect } from "react";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <TodoList
      render={(items, handleRemoveItem) => (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    />
  );
}

export default App;
