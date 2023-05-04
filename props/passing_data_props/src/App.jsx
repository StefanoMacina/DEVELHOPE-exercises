import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component{
  render(){
    return (
      <div>
        <h1>My application</h1>
        <Welcome name = 'stefano' age={18}/>
        <Welcome name = 'Luca' age = {22}/>
        <Welcome name = 'Anto'/>
        <Welcome name = 'Giov'/>
      </div>
    )
  }
}


// export default function App() {
//   return (<>
//     <h1>My application</h1>
//     <Welcome name ='stefano'/>
//   </>
//   )
// }
