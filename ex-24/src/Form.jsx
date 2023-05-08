import React, { Component, createRef } from "react";
import Login from "./Login";

export class Form extends Component {
  constructor(props) {
    super(props);
    this._formRef = createRef();
    this._nameRef = createRef()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const checked = e.target.elements.checkbox.checked;

    console.log({ username, password, checked });
  };

  isFieldsEmpty = () => {
    const inputVal = this._formRef.current.username.value;
    const passVal = this._formRef.current.password.value;

    console.log(inputVal, passVal);
    return (
      (!inputVal && !passVal) ||
      (!inputVal && passVal) ||
      (inputVal && !passVal)
    );
  };

  componentDidMount(){
    this._nameRef.current.focus() 
  }

  render() {
    return (
      <form ref={this._formRef} onSubmit={this.handleSubmit}>
        <input ref={this._nameRef} type="text" name="username" />
        <input type="password" name="password" />
        <input type="checkbox" name="checkbox" />

        <Login isDisabled={this.isFieldsEmpty} />
      </form>
    );
  }
}

export default Form;
//non capisco cosa sbaglio e come risolvere
