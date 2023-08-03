// this component handles hospital login
import React, { useState } from 'react';
import axios from 'axios';

const HospitalLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleHospitalLogin = (e) => {
    e.preventDefault();
    // Implement hospital login functionality here, e.g., calling an API to validate hospital credentials
  };

  return (
    <div>
      <h2>Hospital Login</h2>
      <form onSubmit={handleHospitalLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HospitalLogin;

