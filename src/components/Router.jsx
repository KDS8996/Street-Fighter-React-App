import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import FighterList from './FighterList';
import FighterDetails from './FighterDetails';
import FighterForm from './FighterForm';
import Login from './Login';
import Logout from './Logout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fighters" element={<FighterList />} />
      <Route path="/fighters/:id" element={<FighterDetails />} />
      <Route path="/add-fighter" element={<FighterForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} /> {/* Updated to use the Logout component */}
    </Routes>
  );
};

export default AppRouter;
