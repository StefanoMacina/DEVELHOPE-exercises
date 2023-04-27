import React from 'react';

export class Welcome extends React.Component{

    static defaultProps = {
        name : "Stefano",
    };

    render(){
        return(
            <h1>Welcome {this.props.name}</h1>
        )
    }
}