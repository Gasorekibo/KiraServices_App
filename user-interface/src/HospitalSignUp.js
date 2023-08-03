// this component contains the hospital registration form
import React, { useState } from 'react';

const HospitalSignUp = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Corrected from 'contact' to 'phone'
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
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone</label> {/* Corrected label */}
          <input
            type="text"
            value={phone} // Corrected from 'contact' to 'phone'
            onChange={(e) => setPhone(e.target.value)} // Corrected from 'setContact' to 'setPhone'
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
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default HospitalSignUp;
