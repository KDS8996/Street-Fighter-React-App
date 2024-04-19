import React from 'react';
import { useAuth } from '../hooks/useAuth'; // Assuming the path to useAuth is correct

const Login = () => {
  const { signInWithGoogle } = useAuth(); // Destructure signInWithGoogle from useAuth hook

  return (
    <div>
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
