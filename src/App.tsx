import React from 'react';
import { Result } from 'antd';
import './App.css';
import { useRecoilValueLoadable } from 'recoil';
import { s_Heroes } from './api/state/heroes';

function App() {
  const heroData = useRecoilValueLoadable(s_Heroes);

  return (
    <div className="App">
      <header className="App-header">
        {heroData.state !== 'hasValue' ? (
          <Result status="info" title="Loading..." />
        ) : (
          heroData.contents.map((h) => (
            <div
              style={{ width: 128, height: 128 }}
              onClick={() => alert(h.name)}
            >
              <img
                alt=""
                src={`https://heroespatchnotes.github.io/heroes-talents/images/heroes/${h.shortName}.png`}
              />
            </div>
          ))
        )}
      </header>
    </div>
  );
}

export default App;
