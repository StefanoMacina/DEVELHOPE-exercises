import { useState } from "react";
import Carrello from "./components/Carrello";

function App() {
  const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 20.99 },
    { id: 3, name: "Product 3", price: 15.99 },
    { id: 4, name: "Product 4", price: 8.99 },
    { id: 5, name: "Product 5", price: 12.99 },
  ];

  const [chart, setChart] = useState([]);
  const[price, setPrice] = useState(0)

  const handleAdd = (product) => {
    setChart([...chart, product]);
    console.log(chart);
    setPrice((prevPrice) => {
       return Math.round(prevPrice + product.price)
    })
  };

  return (
    <>
      <ul>
        {products.map((el) => {
          return (
            <>
              <li>{`${el.name} ${el.price}`}</li>
              <button onClick={() => 
                handleAdd(el)}>ADD</button>
                
            </>
          );
        })}
      </ul>
      <Carrello carr={chart} _price={price}/>
    </>
  );
}

export default App;
