import React from 'react';
import App from './app/app';
import express from 'express';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './app/reducer';
import { loadAnimes } from './app/action';
import { renderToString } from 'react-dom/server';

const app = express();
app.use(express.static(`${__dirname}/public`));
app.use('*', (req, res, next) => {
  const animes = require('./animes.json');
  const store = createStore(appReducer);
  store.dispatch(loadAnimes(animes));

  const body = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const preloadState = store.getState();

  const html = `
    <!doctype html>

    <html>
      <head>
        <title>SEO Friendly App</title>
      </head>
      <body>
        <div id="root">${ body }</div>
        <script>
          window.__PRELOAD_STATE__ = ${JSON.stringify(preloadState)};
        </script>
        <script src="/assets/app.js"></script>
      </body>
    </html>
  `

  res.send(html);
});

app.listen(8080);
