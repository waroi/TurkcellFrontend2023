import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NewsList />
        </Route>
        <Route path="/news/:id">
          <NewsDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;