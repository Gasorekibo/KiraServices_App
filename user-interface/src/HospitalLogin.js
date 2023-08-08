// this component handles hospital login
import React, { useState, useRef } from 'react';

const HospitalLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null); // Use useRef for email input ref

  const handleHospitalLogin = (e) => {
    e.preventDefault();
    // Implement hospital login functionality here, e.g., calling an API to log in the hospital
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
            ref={emailRef} // Attach the ref to the email input
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
