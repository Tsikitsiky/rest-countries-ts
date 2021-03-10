import React, { useContext } from 'react';
import Home from './pages/home';
import { Route, Switch } from 'react-router';
import CountryDetail from './pages/countryDetail';
import { Context } from './components/GlobalContext';
import styled from 'styled-components';


function App() {
  const {darkMode} = useContext(Context);
  return (
    <Container>
      <div className={darkMode? 'dark' : ''}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:name">
            <CountryDetail />
          </Route>
        </Switch>
    </div>
    </Container>
  );
}

const Container = styled.div`
  .dark {
    background-color: hsl(216, 53%, 9%);
    color: white;
  }
`;

export default App;
