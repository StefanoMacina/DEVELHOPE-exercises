import React from "react";

export class Counter extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      counter : 0
    }
  }
  
  addtocounter = () => {
    this.setState({ counter : this.state.counter + 1})
  }

  componentDidMount() {
    setInterval(this.addtocounter, 1000);
  }

  render(){
    return <div>
      {this.state.counter}
      </div>
  }
}