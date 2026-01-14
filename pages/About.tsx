import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_NAME } from '../constants';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
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
        title="About Us" 
        description={`Learn more about ${BUSINESS_NAME}, your trusted local supplier for refreshments and snacks.`} 
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-8"
          >
            About {BUSINESS_NAME}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose lg:prose-xl text-gray-600 mb-12"
          >
            <p>
              Welcome to <strong>{BUSINESS_NAME}</strong>, your neighborhood destination for daily refreshments and quick energy boosts. 
              We established our shop with a simple mission: to provide high-quality water, premium energy drinks, and delicious 
              treats to our local community at fair prices.
            </p>
            <p>
              Whether you are a gym-goer looking for that pre-workout Red Bull, an office manager restocking water for the team, 
              or just looking for a sweet treat, we are here to serve you.
            </p>
            <h3>Our Commitment</h3>
            <ul>
              <li><strong>Authenticity:</strong> We only stock genuine products from recognized brands.</li>
              <li><strong>Freshness:</strong> Our stock is rotated regularly to ensure you get the freshest products.</li>
              <li><strong>Service:</strong> We believe in building relationships with our customers through friendly and reliable service.</li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.img 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&auto=format&fit=crop" 
              alt="Shop Interior" 
              className="rounded-xl shadow-lg w-full" 
            />
            <motion.img 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop" 
              alt="Happy Customer" 
              className="rounded-xl shadow-lg w-full" 
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;