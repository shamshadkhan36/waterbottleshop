import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAV_ITEMS, BUSINESS_NAME, PHONE_DISPLAY, EMAIL } from '../constants';
import StickyCTA from './StickyCTA';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-blue p-2 rounded-lg text-white group-hover:bg-brand-dark transition-colors">
                <ShoppingBag size={24} />
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                {BUSINESS_NAME}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6 lg:gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                    location.pathname === item.path ? 'text-brand-blue' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-white border-b border-gray-100"
        >
          <div className="flex flex-col p-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium py-2 px-2 rounded-md ${
                  location.pathname === item.path ? 'bg-brand-light text-brand-dark' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{BUSINESS_NAME}</h3>
              <p className="mb-6 leading-relaxed text-gray-400">
                Your trusted local supplier for premium water bottles, energy drinks, and chocolates. Bulk and retail orders available.
              </p>
              <div className="flex flex-col gap-3">
                <a href={`tel:${PHONE_DISPLAY}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                  <Phone size={18} /> {PHONE_DISPLAY}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-brand-blue transition-colors">
                  <Mail size={18} /> {EMAIL}
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={18} /> <span>Local Retail Shop Near You</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Products</h4>
              <ul className="space-y-3">
                <li><Link to="/water-bottles" className="hover:text-brand-blue transition-colors">Water Bottles (250ml - 1L)</Link></li>
                <li><Link to="/energy-drinks" className="hover:text-brand-blue transition-colors">Energy Drinks (Red Bull, Hell)</Link></li>
                <li><Link to="/chocolates-lollipops" className="hover:text-brand-blue transition-colors">Chocolates & Lollipops</Link></li>
                <li><Link to="/bulk-orders" className="hover:text-brand-blue transition-colors">Bulk & Wholesale</Link></li>
              </ul>
            </div>

            {/* SEO Text / About */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Service Area</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Serving the local community, offices, gyms, and events with fast, reliable delivery coordination via phone and WhatsApp. We are the top-rated local shop for hydration and energy needs.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </div>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
};

export default Layout;