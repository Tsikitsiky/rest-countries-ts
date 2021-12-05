import React, { useContext } from 'react';
import Home from './pages/home';
import { Route, Switch } from 'react-router';
import CountryDetail from './pages/countryDetail';
import { Context } from './components/GlobalContext';
import styled, {ThemeProvider} from 'styled-components';
import {CUSTOM_THEMES } from './theme'


function App() {
  const {darkMode} = useContext(Context);
  return (
    <ThemeProvider theme={darkMode ? CUSTOM_THEMES.dark : CUSTOM_THEMES.light}>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:name">
            <CountryDetail />
          </Route>
        </Switch>
    </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary}
  }
`;

export default App;
