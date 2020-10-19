import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { browserHistory, HistoryRecoilSync } from './api/state/routing';
import AppHost from './AppHost';
import * as serviceWorker from './serviceWorker';
import RecoilDeviceSync from './api/state/device';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilDeviceSync />
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
