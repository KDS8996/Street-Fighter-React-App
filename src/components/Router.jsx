import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import FighterList from './FighterList';
import FighterDetails from './FighterDetails';
import FighterForm from './FighterForm';
import Login from './Login';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fighters" element={<FighterList />} />
      <Route path="/fighters/:id" element={<FighterDetails />} />
      <Route path="/add-fighter" element={<FighterForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Logout />} />
    </Routes>
  );
};

export default AppRouter;
