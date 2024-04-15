import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FighterList from './components/FighterList';
import FighterDetails from './components/FighterDetails';
import FighterForm from './components/FighterForm';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fighters" component={FighterList} />
        <Route exact path="/fighters/:id" component={FighterDetails} />
        <Route exact path="/add-fighter" component={FighterForm} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
