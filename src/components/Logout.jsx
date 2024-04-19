import React from 'react';
import { useAuth } from '../hooks/useAuth'; // Assuming the path to useAuth is correct

const Logout = () => {
  const { signOut } = useAuth(); // Destructure signOut from useAuth hook

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Logout;
