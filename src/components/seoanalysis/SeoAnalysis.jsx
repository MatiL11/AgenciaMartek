import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import CloudsDecoration from '../common/CloudsDecoration';
import TopCloudsDecoration from '../common/TopCloudsDecoration';

const SEOAnalysis = () => {
  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate('/contact');
  };

  return (
    <div className="py-42 relative" style={{background: 'linear-gradient(135deg, #3957ED 0%, #5B73F5 50%, #7C8EF7 100%)'}}>
      {/* Nubes decorativas superiores */}
      <TopCloudsDecoration />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Título principal con animación */}
        <motion.h2 
          className="text-4xl md:text-5xl font-satoshi-medium text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ¿Recibe tu análisis SEO gratuito?
        </motion.h2>
        
        {/* Botón de contacto con animación */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.button
            onClick={handleContactRedirect}
            className="bg-white text-gray-900 px-12 py-4 rounded-full font-satoshi-medium text-lg transition-all duration-300 shadow-lg inline-flex items-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            OBTÉN ANÁLISIS GRATIS
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRightIcon className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Nubes decorativas inferiores */}
      <CloudsDecoration />
    </div>
  );
};

export default SEOAnalysis;