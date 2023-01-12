import React from 'react';

function App() {

// 1-Variáveis
const name: string = "Leonardo"
const age: number = 30
const isWorking: boolean = true


  return (
    <div className="App">
      <h1>React com TS</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <p>Está trabalhando!</p>
      )}
    </div>
  );
}

export default App;
