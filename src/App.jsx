import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/Router';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Street Fighter Database App</h1>
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
