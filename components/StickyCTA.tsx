import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHONE_NUMBER, WHATSAPP_URL } from '../constants';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          rotate: { duration: 0.5, delay: 2, repeatDelay: 5, repeat: Infinity },
          default: { duration: 0.3 }
        }}
        whileHover={{ scale: 1.2 }}
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-14 h-14 bg-brand-blue text-white rounded-full shadow-lg hover:bg-brand-dark transition-colors"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};

export default StickyCTA;