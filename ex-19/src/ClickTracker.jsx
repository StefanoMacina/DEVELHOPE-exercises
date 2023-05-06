import React, { Component } from "react";

export class ClickTracker extends Component {
 state = {
  btnPressed : 'press a button'
 }

  handlePressed = (e) => {
    const newText = e.target.name;
   this.setState({
    btnPressed : newText
   })
    
   
  };

  render() {
    
    const btnStyle = {
      width: "200px",
      height: "100px",
      fontSize: "2rem",
    };

    return (
      <div style={{display:'flex', flexDirection:'column', height:'100vh', justifyContent:'space-evenly'}}>
      <h1 style={{width: '100%',height:'150px', fontSize:'5rem', textAlign:'center'}}>
        {this.state.btnPressed}
      </h1>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        >

        <button style={btnStyle} name="btn-1" onClick={this.handlePressed}>
          btn-1
        </button>
        <button style={btnStyle} name="btn-2" onClick={this.handlePressed}>
          btn-2
        </button>
        <button style={btnStyle} name="btn-3" onClick={this.handlePressed}>
          btn-3
        </button>
      </div>
        </div>
    );
  }
}

export default ClickTracker;
