import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToHash from './components/ScrollToHash';

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
