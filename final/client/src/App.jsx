import Layout from './layout/Layout';
import {Fallback, HomePage, Location} from './pages';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
      </Layout>
    </Router>
  );
}
