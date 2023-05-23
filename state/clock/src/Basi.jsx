import React, { useEffect } from "react";

function Basi() {
  const [val, setVal] = React.useState(0);

  console.log("componente rendering");
  const aumenta = () => {
    setVal((oldVal) => oldVal + 1);
  };


  
  useEffect(() => {

    console.log("sono useEffect");
    if(val < 1){

        document.title = `title`
    } else {
        document.title = `nuovi messaggi: ${val}`
    }
        return () => {
            console.log('clean-up function chiamata');
        }
  }, [val]);



  return (
    <>
      <div>value : {val}</div>
      <button onClick={aumenta}>AUMENTA</button>
    </>
  );
}

export default Basi;
