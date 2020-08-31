import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHost from './AppHost';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import { Router } from 'react-router-dom';
import { HistoryRecoilSync, browserHistory } from './api/state/routing';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <HistoryRecoilSync />
      <Router history={browserHistory}>
        <AppHost />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
