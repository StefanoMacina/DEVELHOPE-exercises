import React, { Component } from "react";

export class UncontrolledForm extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault();

    //accedere ai valori di input del form
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const remember = e.target.elements.remember.checked;
    console.log({
      username,
      password,
      remember,
    });
  };
  


  render() {
    return (
      <div>
        <h3>Uncontrolled form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="username" defaultValue={'jimmy'}/>
          <input type="password" name="password" />
          <input type="checkbox" name="remember" />

          <button type="submit">LOGIN</button>
          <button type="reset">RESET</button>
          <button type="button">PREFILL</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
