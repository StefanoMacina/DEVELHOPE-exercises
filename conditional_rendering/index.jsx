//   1 && 2 => 2
//   IL RISULTATO SARà L'ULTIMA ESPRESSIONE SE TUTTI I VALORI SONO "TRUE"

//      0 && 2 => 0
//      0 = FALSE, 2 = TRUE => RESULT = 0

// 1=== 2 && 'Hello' => 1=2(false), 'hello' = string = true => result = false

// 2 === 2 & 'Hello' => 2=2(true) m 'hello' = string = true => result = 'hello'


class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                {/* voglio stampare hello world se una prop è true*/}
                {this.props.renderGreeting && <h1>Hello, world</h1> }      {/* se prop = false, non stampo niente, altirmenti stampa 'hello world' */}    
                <p>What a beautiful day</p>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <HelloWorld renderGreeting="true"/>    {/* prop = true */}
                {/* 2) !!<HelloWorld renderGreeting="true"/>      =>   aggiungendo '!!' si converte due volte il valore ottendendo un booleano */}
                
            </div>
        )
    }
}