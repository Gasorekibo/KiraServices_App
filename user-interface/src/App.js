import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import HospitalSignUp from './HospitalSignUp';
import HospitalLogin from './HospitalLogin';
import Header from './Header'; // Import the Header component

function App() {
  // Check if the user is logged in based on local storage
  const userLoggedIn = localStorage.getItem('userLoggedIn');

  return (
    <Router>
      <Header /> {/* Render the Header component */}
      <Routes>
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/user/login" element={<Login />} />
        {userLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/hospital/signup" element={<HospitalSignUp />} />
            <Route path="/hospital/login" element={<HospitalLogin />} />
          </>
        ) : (
          // Redirect to login if the user is not logged in
          <Route path="*" element={<Navigate to="/user/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;