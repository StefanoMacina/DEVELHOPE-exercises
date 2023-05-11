import React, { useState } from 'react'

function Carrello({carr, _price}) {
  
    
  console.log(carr);
  return (
    <ul>
      {carr.map((el) => {
        return  <li>{`${el.name} ${el.price}`}</li>
      })}
      <h5>{_price}</h5>
    </ul>
  )
}

export default Carrello