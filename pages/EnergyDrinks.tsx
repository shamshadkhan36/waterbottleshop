import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, BatteryCharging } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import SEOHead from '../components/SEOHead';

const EnergyDrinks: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
        title="Energy Drinks" 
        description="Get Red Bull, Hell Energy, and Power Water near you. Bulk energy drinks for gyms, offices, and students." 
      />

      <div className="bg-slate-900 min-h-screen text-white">
        {/* Hero */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 opacity-50 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
             >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Zap size={64} className="mx-auto text-yellow-400 mb-6" />
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                  POWER UP
                </h1>
                <p className="text-xl text-gray-300 max-w-xl mx-auto">
                  Premium energy drinks to fuel your workout, workday, or study session.
                </p>
             </motion.div>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Red Bull */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <img src="https://images.unsplash.com/photo-1570526427001-9d80d114054d?fm=jpg" alt="Red Bull" className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Red Bull</h3>
                <p className="text-gray-400 text-sm mb-4">Gives you wings. The classic energy boost for high performance.</p>
                <div className="flex justify-between items-center">
                  <span className="bg-slate-700 px-3 py-1 rounded-full text-xs text-blue-300">250ml Can</span>
                  <a href={WHATSAPP_URL} className="text-yellow-400 font-bold hover:text-yellow-300">Order Now &rarr;</a>
                </div>
              </div>
            </motion.div>

            {/* Hell */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-red-600 transition-colors"
            >
              <img src="https://images.unsplash.com/photo-1570526427001-9d80d114054d?fm=jpg" alt="Hell Energy" className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-red-500">Hell Energy</h3>
                <p className="text-gray-400 text-sm mb-4">Maximum taste, maximum energy. The fierce choice.</p>
                <div className="flex justify-between items-center">
                   <span className="bg-slate-700 px-3 py-1 rounded-full text-xs text-red-300">Various Flavors</span>
                  <a href={WHATSAPP_URL} className="text-yellow-400 font-bold hover:text-yellow-300">Order Now &rarr;</a>
                </div>
              </div>
            </motion.div>

             {/* Power Water */}
             <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-colors"
            >
              <img src="https://images.unsplash.com/photo-1570526427001-9d80d114054d?fm=jpg" alt="Power Water" className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-cyan-400">Power Water</h3>
                <p className="text-gray-400 text-sm mb-4">Hydration + Energy. Clean caffeine kick with refreshing taste.</p>
                <div className="flex justify-between items-center">
                   <span className="bg-slate-700 px-3 py-1 rounded-full text-xs text-cyan-200">Electrolytes</span>
                  <a href={WHATSAPP_URL} className="text-yellow-400 font-bold hover:text-yellow-300">Order Now &rarr;</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Use Cases */}
        <div className="py-16 bg-slate-950">
           <div className="container mx-auto px-4">
              <h2 className="text-center text-3xl font-bold mb-12">Perfect For</h2>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center p-6 bg-slate-900 rounded-2xl w-full md:w-1/3 border border-slate-800"
                  >
                    <Activity size={48} className="text-green-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Gym & Fitness</h4>
                    <p className="text-gray-400">Pre-workout boost for intense sessions.</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center p-6 bg-slate-900 rounded-2xl w-full md:w-1/3 border border-slate-800"
                  >
                    <BatteryCharging size={48} className="text-yellow-400 mb-4" />
                    <h4 className="text-xl font-bold mb-2">Office & Study</h4>
                    <p className="text-gray-400">Late night deadlines and study marathons.</p>
                  </motion.div>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnergyDrinks;