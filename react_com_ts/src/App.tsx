import React from 'react';

function App() {

// 1-Variáveis
const name: string = "Leonardo"
const age: number = 30
const isWorking: boolean = true

// 2- Funções
const userGreeting = (name:string): string => {
  return `Olá, ${name}! `
}


  return (
    <div className="App">
      <h1>React com TS</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
