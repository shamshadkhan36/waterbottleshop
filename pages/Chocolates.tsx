import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const Chocolates: React.FC = () => {
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
        title="Chocolates & Lollipops" 
        description="Delicious chocolates and lollipops for kids and gifts. Wholesale chocolate shop near you." 
      />

      <div className="bg-pink-50 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 font-serif"
            >
              Sweet Treats
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg"
            >
              Premium chocolates and fun lollipops for every occasion.
            </motion.p>
          </div>

          {/* Section 1: Chocolates */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <motion.div 
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
                <img src="https://images.unsplash.com/photo-1623660053975-cf75a8be0908?fm=jpg" alt="Chocolate Bars" className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
             </motion.div>
             <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-lg"
             >
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="text-red-500 fill-current" /> Chocolates
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From creamy milk chocolate to rich dark varieties. We stock popular brands perfect for snacking or gifting. 
                  Available in single bars or bulk boxes for retail.
                </p>
                <ul className="mb-8 space-y-2 text-gray-600">
                  <li>• Branded Bars (Dairy Milk, KitKat, etc.)</li>
                  <li>• Gift Packs</li>
                  <li>• Bulk Boxes for Shops</li>
                </ul>
                <a href={WHATSAPP_URL} className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-transform hover:scale-105">
                  Order Chocolates
                </a>
             </motion.div>
          </div>

           {/* Section 2: Lollipops */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-lg order-2 lg:order-1"
             >
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Gift className="text-purple-500" /> Lollipops
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Colorful, flavorful fun for kids! We have a wide variety of lollipops and candies. 
                  Perfect for birthday party favors or retail counters.
                </p>
                <a href={WHATSAPP_URL} className="inline-block bg-purple-500 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-600 transition-transform hover:scale-105">
                  Order Lollipops
                </a>
             </motion.div>
             <motion.div 
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="order-1 lg:order-2"
             >
                <img src="https://images.unsplash.com/photo-1575224300306-1b8da36134ec?fm=jpg" alt="Colorful Lollipops" className="rounded-3xl shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500" />
             </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Chocolates;