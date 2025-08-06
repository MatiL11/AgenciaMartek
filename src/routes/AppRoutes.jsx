import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Process from '../pages/Process';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/process" element={<Process />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      {/* Ruta 404 - opcional */}
      <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1><p className="text-gray-600">Página no encontrada</p></div></div>} />
    </Routes>
  );
};

export default AppRoutes;