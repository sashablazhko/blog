import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from '../store';
import routes from '../routes';

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

export default App;
