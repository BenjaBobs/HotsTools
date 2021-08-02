import './main.scss';
import './utils/ArrayExtensions';

import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import AppHost from './AppHost';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppHost />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
