import { Welcome } from "./Welcome";
import React from "react";

export class App extends React.Component{
    render(){
        return(
            <>
                <Welcome name ="Stefano" age="23"/>
            </>
        )
    }
}