import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import AppHost from './AppHost';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppHost />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
