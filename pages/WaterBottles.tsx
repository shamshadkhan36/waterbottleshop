import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Check, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const WaterBottles: React.FC = () => {
  const sizes = [
    { title: '250ml Mini', desc: 'Perfect for events, parties, and quick hydration.', image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?fm=jpg' },
    { title: '500ml Standard', desc: 'Ideal for office meetings, lunch boxes, and travel.', image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?fm=jpg' },
    { title: '1 Litre Bottle', desc: 'All-day hydration for gym goers and home use.', image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?fm=jpg' },
  ];

  const pageVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <SEOHead 
        title="Water Bottles" 
        description="Buy 250ml, 500ml, and 1L water bottles near you. Bulk supply available for events and offices from Shamshad Shops." 
      />

      <div className="bg-sky-50 min-h-screen">
        {/* Header */}
        <div className="bg-white py-12 border-b border-sky-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Pure & Safe</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Drinking Water Bottles</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sourced from trusted brands, ensuring purity and freshness in every sip. Available in multiple sizes for every need.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Products */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sizes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-sky-100"
              >
                <div className="bg-sky-50 rounded-xl p-8 mb-6 flex items-center justify-center h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><Check size={16} className="text-brand-blue" /> Sealed for freshness</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><Check size={16} className="text-brand-blue" /> ISO Certified Brands</li>
                </ul>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors hover:shadow-md"
                >
                  Order {item.title}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6">Why Choose Us for Bulk Water Supply?</h2>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="bg-brand-light p-3 rounded-full h-fit text-brand-dark"><Droplets /></div>
                    <div>
                      <h4 className="font-bold text-lg">Consistent Purity</h4>
                      <p className="text-gray-600">We only stock verified, branded water bottles.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <div className="bg-brand-light p-3 rounded-full h-fit text-brand-dark"><ShieldCheck /></div>
                    <div>
                      <h4 className="font-bold text-lg">Safe Storage</h4>
                      <p className="text-gray-600">Stored in cool, hygienic conditions to maintain quality.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                <img src="https://images.unsplash.com/photo-1534938665420-4193effeacc4?q=80&w=800&auto=format&fit=crop" alt="Bulk water storage" className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WaterBottles;