import { motion } from 'framer-motion';
import workingImage from '../../assets/working.png';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
const WorkingProcess = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ilustración lado izquierdo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <motion.img 
                src={workingImage} 
                alt="Working Process Illustration" 
                className="w-full h-auto mx-auto transform scale-115"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {/* Contenido lado derecho */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 text-gray-900 text-xs font-satoshi-bold tracking-wider rounded-lg mb-4 shadow-lg" 
                    style={{background: 'linear-gradient(135deg, #5B73F5 0%, #7C8EF7 50%, #9FA8F9 100%)'}}>
                PROCESO DE TRABAJO
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-satoshi-bold text-gray-900 mb-6 leading-tight">
              Proceso de trabajo simple para comenzar.
            </h2>
            
            <p className="text-gray-600 text-lg font-satoshi-medium leading-relaxed mb-8">
              Estamos comprometidos a entregar soluciones únicas de medios digitales desde desarrollo web hasta soluciones de eCommerce para nuestros clientes satisfechos utilizando nuestro conocimiento y experiencia.
            </p>
            
            <motion.button 
              className="inline-flex items-center text-gray-900 font-satoshi-bold text-sm tracking-wider hover:text-blue-600 transition-colors duration-200"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              APRENDE MÁS
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;