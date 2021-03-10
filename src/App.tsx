import React from 'react';
import Home from './pages/home';
import { Route, Switch } from 'react-router';
import CountryDetail from './pages/countryDetail';


function App() {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:name">
        <CountryDetail />
      </Route>
    </Switch>
    </>
  );
}

export default App;
