import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckSquare, Truck } from 'lucide-react';
import { PHONE_DISPLAY, WHATSAPP_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const BulkOrders: React.FC = () => {
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
        title="Bulk & Wholesale Orders" 
        description="Wholesale water bottles and energy drinks supplier. Best rates for shops, offices, and events." 
      />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h1 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold text-gray-900 mb-4"
              >
                Bulk & Corporate Orders
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600"
              >
                Get the best wholesale rates for your business, event, or office.
              </motion.p>
            </div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
            >
              <div className="bg-brand-dark p-8 text-white text-center">
                <h2 className="text-2xl font-bold">We Supply To</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
                   <h3 className="font-bold text-lg mb-4 text-brand-dark">Retail Shops</h3>
                   <ul className="space-y-3">
                     <li className="flex gap-2"><CheckSquare className="text-green-500" /> Competitive wholesale margins</li>
                     <li className="flex gap-2"><CheckSquare className="text-green-500" /> Regular restocking schedule</li>
                     <li className="flex gap-2"><CheckSquare className="text-green-500" /> Wide variety of stock</li>
                   </ul>
                </div>
                <div className="p-8">
                   <h3 className="font-bold text-lg mb-4 text-brand-dark">Offices & Events</h3>
                   <ul className="space-y-3">
                     <li className="flex gap-2"><CheckSquare className="text-green-500" /> Bulk water bottle discounts</li>
                     <li className="flex gap-2"><CheckSquare className="text-green-500" /> Energy drinks for corporate events</li>
                     <li className="flex gap-2"><CheckSquare className="text-green-500" /> Reliable, timely delivery</li>
                   </ul>
                </div>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Contact Us', desc: 'Call or WhatsApp with your requirements.', icon: Phone },
                { title: 'Get Quote', desc: 'We provide the best bulk pricing instantly.', icon: CheckSquare },
                { title: 'Delivery/Pickup', desc: 'Arrange convenient pickup or local delivery.', icon: Truck },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100"
                >
                  <div className="w-12 h-12 bg-brand-light text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Direct Contact CTA */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-blue to-brand-dark rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Start Your Order</h2>
              <p className="mb-8 opacity-90">No complex forms. Just direct communication.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <a href={`tel:${PHONE_DISPLAY}`} className="bg-white text-brand-dark px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-transform hover:scale-105 shadow-md">
                   Call {PHONE_DISPLAY}
                 </a>
                 <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-transform hover:scale-105 shadow-md">
                   WhatsApp Inquiry
                 </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BulkOrders;