import React, { Component } from 'react'

export class TodoList extends Component {
    constructor(props){
        super(props)

        this._inputRef = React.createRef()
        this.state = {
            items : [],
            
        }
    }

handlestate = () => {
    const inputText = this._inputRef.current.value; 
    this.setState(() => ({
        items :[...this.state.items , inputText]
    }))
    this._inputRef.current.value = ''; 

}

  render() {
    return (
      <div>
        <ul>
            {this.state.items.map((item, index) => 
                <li key = {index}>{item}</li>
            )}
        </ul>
        <input ref={this._inputRef} type="text" name='username'  />
        <button onClick={this.handlestate}>CLICK TO ADD</button>
      </div>
    )
  }
}

export default TodoList