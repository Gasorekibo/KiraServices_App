// this contains navigation links and logout buttons
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Header = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogout = () => {
    // Implement logout functionality here, e.g., clearing user authentication state
    // and redirecting to the login page
    // You can use local storage or a state management library (e.g., Redux) to manage user authentication state.
    // For demonstration purposes, let's clear the authentication state using localStorage.
    localStorage.removeItem('userLoggedIn'); // Example: Remove userLoggedIn flag from localStorage
    navigate('/user/login'); // Navigate to the login page
  };

  return (
    <div>
      <h2>Header</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;

