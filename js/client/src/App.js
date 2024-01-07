import Layout from './layout/Layout';
import {Fallback, HomePage, Location} from './pages';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/location/:id">
            <Location />
          </Route>
          <Route>
            <Fallback />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
