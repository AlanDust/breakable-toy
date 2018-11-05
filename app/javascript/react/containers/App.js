import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import InstrumentsContainer from './InstrumentsContainer';
import TeachersContainer from './TeachersContainer';
import IndividualTeacherContainer from './IndividualTeacherContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={InstrumentsContainer} />
      <Route path='/instruments/:id' >
        <IndexRoute component={TeachersContainer} />
        <Route path='/instruments/:instrument_id/users/:id' component={IndividualTeacherContainer} />
        <Route path='/instruments/instrument_id/users' component={TeachersContainer} />
      </Route>
    </Router>
  )
}

export default App
