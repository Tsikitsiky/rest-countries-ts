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
      <div className={darkMode? 'dark' : 'normal'}>
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
  //background-color: hsl(220.00000000000006, 31.034482758620722%, 94.31372549019608%);
  .dark {
    background-color: hsl(216, 53%, 9%);
    color: white;
    
    .dark {
      background-color: hsl(219, 30%, 18%);
    }
    .white {
      background-color: white;
    }
  }
`;

export default App;
