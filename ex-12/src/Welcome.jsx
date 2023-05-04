import React from "react";
import { Age } from "./Age";

export function Welcome(props){
    
    const age1 = 19

    return (
        <>
        <h1>Welcome, {props.name}</h1>
        {props.name === 'jhon' && age1 > 18 && age1 < 65 && <Age age={age1}/>}
        </>
    )
}

