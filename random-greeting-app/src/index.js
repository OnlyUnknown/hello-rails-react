// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App id="root" />
  </Provider>,
  document.getElementById('root')
);

// Comment out or remove the following line:
// reportWebVitals();
