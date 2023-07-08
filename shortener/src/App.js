import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UrlInputPage from './UrlInputPage';
import UrlResultPage from './UrlResultPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UrlInputPage} />
        <Route path="/result" component={UrlResultPage} />
      </Switch>
    </Router>
  );
};

export default App;
