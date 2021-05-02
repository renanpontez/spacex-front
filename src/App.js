import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { ROUTE_HOME } from './utils/routes';
import { hotjar } from 'react-hotjar';

hotjar.initialize(
  process.env.REACT_APP_HOTJAR_ID,
  process.env.REACT_APP_HOTJAR_SNIPPET,
);

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
