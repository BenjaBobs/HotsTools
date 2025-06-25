import './main.scss';
import './utils/ArrayExtensions';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppHost } from '@src/AppHost';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <AppHost />
  </React.StrictMode>,
);
