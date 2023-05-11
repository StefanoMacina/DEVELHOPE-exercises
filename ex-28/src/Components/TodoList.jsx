import React from "react";
import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState(["code", "eat", "sleep", "go to gym"]);
  const [newTodo, setNewtodo] = useState('')

  const handleInput = (e) => {
    setNewtodo(e.target.value)
  }

  const handleArray = () => {
    setTodo([...todo, newTodo])
    setNewtodo('')
  }

  const handleResetArray = () => {
    setTodo([])
  }
    
  const handleSingleItem = (index) => {
    setTodo(todo.filter(( el,i) => i !== index));
  }
  return (
    <div>
      {
        todo.map((el,i) => <li>{el} <button onClick={()=> handleSingleItem(i)}>remove</button></li>)
      }
      <input type="text" value ={newTodo} onChange={handleInput} />
      <button onClick={handleArray}>add a value</button>
      <button onClick={handleResetArray}>CLEAR</button>
    </div>
  );
}

export default TodoList;
