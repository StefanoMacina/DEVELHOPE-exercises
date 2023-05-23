import React from 'react';
import Title from './Components/Title';

function App() {
  return (
    <Title render={() => (
      <h1>Il mio titolo</h1>
    )} />
  );
}

export default App;