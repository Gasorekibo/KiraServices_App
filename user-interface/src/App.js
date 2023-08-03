import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement

import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import HospitalSignUp from './HospitalSignUp';
import HospitalLogin from './HospitalLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hospital/signup" element={<HospitalSignUp />} />
        <Route path="/hospital/login" element={<HospitalLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

