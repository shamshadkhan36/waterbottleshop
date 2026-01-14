import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import WaterBottles from './pages/WaterBottles';
import EnergyDrinks from './pages/EnergyDrinks';
import Chocolates from './pages/Chocolates';
import BulkOrders from './pages/BulkOrders';
import About from './pages/About';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/water-bottles" element={<WaterBottles />} />
        <Route path="/energy-drinks" element={<EnergyDrinks />} />
        <Route path="/chocolates-lollipops" element={<Chocolates />} />
        <Route path="/bulk-orders" element={<BulkOrders />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </HashRouter>
  );
};

export default App;