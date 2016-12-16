require('babel-polyfill');
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import ContactListContiner from './components/list-container'

const routes = (
  <Router history={hashHistory}>
    <Route path='/contacts' component={ContactListContiner} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(routes, document.getElementById('app'));
});
