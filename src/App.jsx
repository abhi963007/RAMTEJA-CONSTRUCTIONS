import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Pricing from './pages/Pricing';
import ProductsMaster from './pages/ProductsMaster';
import ProductSingle from './pages/ProductSingle';
import NewsRoom from './pages/NewsRoom';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/LegalPrivacy';
import Partners from './pages/Partners';
import CookiePolicy from './pages/LegalCookie';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<ProductsMaster />} />
          <Route path="/product/:id" element={<ProductSingle />} />
          <Route path="/newsroom" element={<NewsRoom />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
