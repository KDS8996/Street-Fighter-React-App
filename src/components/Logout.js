import React from 'react';
import { auth } from './firebase';

const Logout = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Logout;
