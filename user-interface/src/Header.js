// this contains navigation links and logout buttons
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Update this import

const Header = () => {
  const navigate = useNavigate(); // Change useHistory to useNavigate

  const handleLogout = () => {
    // Implement logout functionality here, e.g., clearing user authentication state
    // and redirecting to the login page
    // You can use local storage or a state management library (e.g., Redux) to manage user authentication state.
    // For demonstration purposes, let's clear the authentication state using localStorage.

    // Example: Clear the authentication state from local storage
    localStorage.removeItem('userAuthToken');

    // Navigate to the login page after logout
    navigate('/user/login'); // Use navigate instead of history.push
  };

  return (
    <div>
      <h2>Header</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;

