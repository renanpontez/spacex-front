import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { ROUTE_HOME } from './utils/routes';
import ReactGA from 'react-ga';
ReactGA.initialize('G-G4GDE3LRWZ');

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTE_HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
