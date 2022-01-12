import {HomePage, Location} from './pages';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/location/:id">
          <Location />
        </Route>
      </Switch>
    </Router>
  );
}
