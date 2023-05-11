import React, { Component } from "react";

export class MyTodos extends Component {
  render() {
    return (
      <div className="todos">
        <h1>todos</h1>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              {todo.completed && <span>(completed)</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyTodos;
