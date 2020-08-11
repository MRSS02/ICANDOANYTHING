import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Qual o poder do REACT? <br/><br/>É de mais de 8000!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=qhxnohWmAKw"
          target="_blank"
          rel="noopener noreferrer"
        >
          OITO MIL!
        </a>
      </header>
    </div>
  );
}

export default App;
