// this component contains the hospital registration form
import React, { useState } from 'react';
import axios from 'axios';

const HospitalSignUp = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const handleHospitalSignUp = (e) => {
    e.preventDefault();
    // Implement hospital registration functionality here, e.g., calling an API to register a new hospital
  };

  return (
    <div>
      <h2>Hospital Registration</h2>
      <form onSubmit={handleHospitalSignUp}>
        <div>
          <label>Hospital Name</label>
          <input
            type="text"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Contact</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default HospitalSignUp;

