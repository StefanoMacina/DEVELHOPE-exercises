import React, { createContext, useEffect, useState } from "react";
import Component1 from "./Components/Component1";

export const AppContext = createContext();

const App = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setState((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  });

  function handleX() {
    
  }

  return (
    <>
      <AppContext.Provider value={state}>
        <h1>page title</h1>
        <Component1 />
        <button>CLICK TO ADD</button>
      </AppContext.Provider>
    </>
  );
};

export default App;
