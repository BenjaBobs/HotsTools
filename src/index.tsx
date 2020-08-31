import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import { Router } from 'react-router-dom';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router history={history}>
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
