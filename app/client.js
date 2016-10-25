require('./app.css');

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import appReducer from './reducer';

const preloadState = window.__PRELOAD_STATE__;
const store = createStore(appReducer, preloadState);

render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('root'));
