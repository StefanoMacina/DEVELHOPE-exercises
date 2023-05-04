import React from "react";


export class Welcome extends React.Component{
    render(){
        return <>
        <h2>Hello, {this.props.name} of age {this.props.age}</h2>
        </>
    }
}




// export function Welcome(props) {
//   return (
//     <h2>Hello, {props.name}</h2>
//   )
// }

