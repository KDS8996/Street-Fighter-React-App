// src/components/Logout.jsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { auth } from '../firebase'; // Import the auth service directly

const Logout = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Additional logic after successful sign-out
    } catch (error) {
      console.error('Sign-out failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Logout;
