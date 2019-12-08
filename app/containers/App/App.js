import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RegionsPage from 'containers/RegionsPage';
import CountriesPage from 'containers/CountriesPage';
import './App.scss';

const App = () => (
  <div className="app-wrapper">
    <Switch>
      <Route exact path="/" render={() => <Redirect to='/region' />} />
      <Route exact path="/region" component={RegionsPage} />
      <Route exact path="/region/:regionId" component={CountriesPage} />
    </Switch>
  </div>
);

export default App;
