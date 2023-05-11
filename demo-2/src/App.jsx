import React, { Component } from "react";
import MyList from "./MyList";
import MyTodos from "./MyTodos";
import Container from "./Container";
import MouseTracker from "./MouseTracker";

const toDos = [
  { id: 1, title: "buy Milk", completed: true },
  { id: 2, title: "buy water", completed: false },
  { id: 3, title: "buy plants", completed: true },
  { id: 4, title: "buy chocolate", completed: false },
];

export class App extends Component {
  render() {
    return (
      <Container title="my application">
        <MouseTracker />
      </Container>
    );
  }
}

export default App;
