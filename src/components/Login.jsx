import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { auth } from '../firebase'; // Import the auth service directly

const Login = () => {
  const { signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      // Additional logic after successful sign-in
    } catch (error) {
      console.error('Sign-in with Google failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
