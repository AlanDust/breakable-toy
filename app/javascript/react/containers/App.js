import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import InstrumentsContainer from './InstrumentsContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={InstrumentsContainer} />
    </Router>
  )
}

export default App
