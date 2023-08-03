import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement

import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import registerHospital from './HospitalSignUp';
import loginToHospital from './HospitalLogin';

function App() {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hospital/signup" element={<registerHospital />} />
        <Route path="/hospital/login" element={<loginToHospital />} />
      </Routes> {/* Replace Switch with Routes */}
    </Router>
  );
}

export default App;

