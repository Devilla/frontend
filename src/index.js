import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

import App from './App.js';

const rootEl = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <App Component={Component} />,
    rootEl
  );
};

render(Routes);

registerServiceWorker();
