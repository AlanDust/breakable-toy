import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import InstrumentsContainer from './InstrumentsContainer';
import TeachersContainer from './TeachersContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={InstrumentsContainer} />
      <Route path='/instruments/:id' >
        <IndexRoute component={TeachersContainer} />
      </Route>
    </Router>
  )
}

export default App
