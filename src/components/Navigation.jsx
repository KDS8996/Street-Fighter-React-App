import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // src/hooks/useAuth 

const Navigation = () => {
  const { user, logout } = useAuth(); // Custom hook to manage authentication state

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fighters">Fighters</Link>
        </li>
        <li>
          <Link to="/add-fighter">Add Fighter</Link>
        </li>
        {/* Conditional rendering based on authentication state */}
        {user ? (
          <>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
