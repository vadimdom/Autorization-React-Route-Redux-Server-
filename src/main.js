import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store.js';

import Application from './components/containers/Application.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('mount-point')
);