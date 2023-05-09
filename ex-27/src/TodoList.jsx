import React, { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this._inputIndex = React.createRef();
    this._inputRef = React.createRef();
    this.state = {
      items: [],
    };
  }

  handlestate = () => {
    const inputText = this._inputRef.current.value;
    this.setState(() => ({
      items: [...this.state.items, inputText],
    }));
    this._inputRef.current.value = "";
  };

  handleReset = () => {
    this.setState(() => ({
      items: [],
    }));
  };

  handleSingleReset = (index) => {
    const newArr = [...this.state.items];
    newArr.splice(index, 1);

    this.setState({
      items: newArr,
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleSingleReset(index)}>
                delete
              </button>
            </li>
          ))}
        </ul>
        <input ref={this._inputRef} type="text" name="username" />
        <button onClick={this.handlestate}>CLICK TO ADD</button>
        <button type="reset" onClick={this.handleReset}>
          RESET ALL
        </button>
      </div>
    );
  }
}

export default TodoList;
