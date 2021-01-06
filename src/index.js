import React from 'react';
import ReactDOM from 'react-dom';

import AppQueryClientProvider from './QueryClient';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

ReactDOM.render(
  <AppQueryClientProvider>
    <App />
  </AppQueryClientProvider>,
  document.getElementById('root')
);
