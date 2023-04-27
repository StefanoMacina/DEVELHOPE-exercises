import React from 'react';


export class Welcome extends React.Component{
    render(){
                    //riferimento ad una prop
        return <h2>Hello , {this.props.name} {this.props.age}</h2>
    }
}