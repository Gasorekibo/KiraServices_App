import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import HospitalSignUp from './HospitalSignUp';
import HospitalLogin from './HospitalLogin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/user/signup" component={SignUp} />
        <Route exact path="/user/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/hospital/signup" component={HospitalSignUp} />
        <Route exact path="/hospital/login" component={HospitalLogin} />
      </Switch>
    </Router>
  );
}

export default App;
