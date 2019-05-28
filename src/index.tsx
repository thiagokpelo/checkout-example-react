import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './containers/root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Router basename="/checkout-example-react">
    <Root store={store} />
  </Router>
, document.getElementById('root'));
