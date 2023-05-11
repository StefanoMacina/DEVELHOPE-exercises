import React from 'react';
import { useState } from 'react';


// don't change the Component name "App"
export default function Message() {
  const [input, setInput] = useState('');

  const handleText = (e) => {
      const length = e.target.value.length
    if ( length >= 3) {
      setInput('valid');
    } else if (length < 3 || !length){
      setInput('Invalid')
    }
  };

  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={handleText} />
      <p>{input} message</p>
    </form>
  );
}