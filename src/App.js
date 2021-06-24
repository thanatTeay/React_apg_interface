import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainP1 from './components/MainP1'
import MainP2 from './components/MainP2'
import LogIn from './components/LogIn'
import CheckRandom from './components/CheckRandom'
import CheckRandom2 from './components/CheckRandom2'
import SignUp from './components/SignUp'
import SubmitPasscode from './components/SubmitPasscode'
import SubmitPasscode2 from './components/SubmitPasscode2'
import {AuthProvider} from './components/auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={LogIn}/>
          <Route path='/login' component={LogIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/mainP1' component={MainP1}/>
          <Route path='/mainP2' component={MainP2}/>
          <Route path='/passcode' component={CheckRandom}/>
          <Route path='/passcode2' component={CheckRandom2}/>
          <Route path='/submit' component={SubmitPasscode}/>
          <Route path='/submit2' component={SubmitPasscode2}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
