import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Truck, Smile } from 'lucide-react';
import { CATEGORIES, WHATSAPP_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const pageVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 }
};

const Home: React.FC = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <SEOHead 
        title="Home" 
        description="Shamshad Shops - Your local provider for Water Bottles, Energy Drinks, and Chocolates. Order via WhatsApp or Phone today!" 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue to-brand-dark text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Refresh & Recharge <br/>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-brand-accent inline-block"
                >
                  Near You
                </motion.span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Premium water bottles, top-tier energy drinks, and delicious chocolates. 
                Serving local retail and bulk orders.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-brand-accent text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                >
                  Order on WhatsApp <ArrowRight size={20} />
                </a>
                <Link 
                  to="/bulk-orders"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-transform hover:scale-105"
                >
                  Bulk Inquiry
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                src="https://plus.unsplash.com/premium_photo-1681826664053-5f50e4a0c513?fm=jpg" 
                alt="Refreshing drinks" 
                className="rounded-3xl shadow-2xl border-4 border-white/20 max-w-xs md:max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">High-quality hydration and energy solutions for individuals, offices, and events.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {CATEGORIES.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 p-2 rounded-full text-brand-blue">
                    <cat.icon size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-gray-600 mb-6">{cat.description}</p>
                  <Link 
                    to={cat.path} 
                    className="inline-flex items-center text-brand-blue font-semibold hover:gap-2 transition-all"
                  >
                    View Products <ArrowRight size={18} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust/Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={itemVariants} className="p-6">
              <div className="w-16 h-16 bg-brand-light text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Authentic Products</h3>
              <p className="text-gray-600">100% genuine brands including Red Bull, Hell, and premium mineral water.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6">
              <div className="w-16 h-16 bg-brand-light text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable Supply</h3>
              <p className="text-gray-600">Consistent stock for bulk orders, offices, gyms, and retail partners.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6">
              <div className="w-16 h-16 bg-brand-light text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Smile size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Service</h3>
              <p className="text-gray-600">We are right around the corner. Easy ordering via Phone or WhatsApp.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Order?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Get the best rates on bulk water bottles and energy drinks near you. Contact us today.</p>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-brand-accent text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Chat with Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;