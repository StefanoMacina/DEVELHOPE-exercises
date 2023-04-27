import React from 'react';
import { Welcome } from './Welcome';


export class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Awesome application</h1>
                <Welcome name ='stefano' age={23}/>
            </div>
        )
    }
}