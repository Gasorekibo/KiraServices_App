// this contains navigation links and logout buttons
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Implement logout functionality here, e.g., clearing user authentication state
    // and redirecting to the login page//
    localStorage.removeItem('userToken');
    history.push('/user/login');
  };

  return (
    <div>
      <h2>Header</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;

