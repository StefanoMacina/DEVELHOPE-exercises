// useEffect è resposabile di tutte le azioni che attengono al di fuori del componente
// fondamentale quanod si interagisce con l'esterno (fetch data , timers, eventListeners)

import React, { useEffect, useState } from "react";

function Explanation() {
  // !! useState controlla il valore e al suo mutare causa un nuovo render del componente => nuovo useEffect chiamato

  const [val, setVal] = useState(0);
  // useEffect parte ogni volta che il componente viene renderizzato
    const handleIncrease = () => {
        setVal((c) => c + 1)
        
    }
  // PAR.1 = CALLBACK FUNCTION, PAR.2 = elementi da controllare per chiamare useEffect '[]'
  useEffect(() => {
    console.log(`useEffect chiamato ${val} volte`);
    if(val < 1) {
        document.title = 'titolo pagina'
    } else if (val == 1){
        document.title = `nuovo messaggio ${val}`
    } else if (val > 1){
        document.title = `nuovi messaggi ${val}`
    }

    // se l'array è vuoto useEffect viene chiamato solo al primo render
  }, [val]);


  
  return <>
  <h1>{val}</h1>
  <button onClick={handleIncrease}>CLICK TO INCREASE</button>
  </>;
}

export default Explanation;
