import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { PHONE_DISPLAY, EMAIL, WHATSAPP_URL, BUSINESS_NAME } from '../constants';
import SEOHead from '../components/SEOHead';

const Contact: React.FC = () => {
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
        title="Contact Us" 
        description={`Contact ${BUSINESS_NAME} for orders and inquiries. Call or WhatsApp us today.`} 
      />

      <div className="bg-white min-h-screen py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row"
          >
            
            {/* Contact Info */}
            <div className="bg-brand-dark text-white p-12 md:w-2/5">
              <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
              <p className="text-blue-200 mb-8">
                Have a question about bulk orders or stock availability? Reach out to us directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-brand-accent" />
                  <div>
                    <h3 className="font-semibold text-sm text-blue-200 uppercase tracking-wider">Phone</h3>
                    <a href={`tel:${PHONE_DISPLAY}`} className="text-lg font-medium hover:text-brand-accent transition-colors">{PHONE_DISPLAY}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="mt-1 text-brand-accent" />
                  <div>
                    <h3 className="font-semibold text-sm text-blue-200 uppercase tracking-wider">WhatsApp</h3>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-brand-accent transition-colors">Chat Now</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-brand-accent" />
                  <div>
                    <h3 className="font-semibold text-sm text-blue-200 uppercase tracking-wider">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-lg font-medium hover:text-brand-accent transition-colors">{EMAIL}</a>
                  </div>
                </div>
                
                 <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-brand-accent" />
                  <div>
                    <h3 className="font-semibold text-sm text-blue-200 uppercase tracking-wider">Location</h3>
                    <p className="text-lg font-medium">Local Retail Shop<br/>Near You</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder / Form Area */}
            <div className="p-12 md:w-3/5 bg-gray-50">
               <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Quick Message</h2>
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                   <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none" placeholder="Your Name" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                   <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none" placeholder="Your Phone Number" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                   <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none h-32" placeholder="I'm interested in bulk water bottles..."></textarea>
                 </div>
                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition-colors shadow-lg"
                 >
                   Send Message via WhatsApp
                 </motion.button>
                 <p className="text-xs text-center text-gray-500 mt-2">
                   *This will open WhatsApp with your message pre-filled.
                 </p>
               </form>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;