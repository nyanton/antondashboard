import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const title = React.createElement('h1', {},`Anton!`)
  return (
    <div className="App">
      <header className="App-header">
        {title}
      </header>
    </div>
  );
}

export default App;
