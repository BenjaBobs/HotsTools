import React from 'react';
import { Result } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Result status="404" />
        <p>
          This is a test of deployment
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Does deployment work?
        </a>
      </header>
    </div>
  );
}

export default App;
