import { motion } from 'framer-motion';
import CloudsDecoration from '../components/common/CloudsDecoration';
import TopCloudsDecoration from '../components/common/TopCloudsDecoration';

const About = () => {
  return (
    <div className="min-h-screen relative" style={{background: 'linear-gradient(135deg, #3957ED 0%, #5B73F5 50%, #7C8EF7 100%)'}}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 pb-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Contenido principal */}
          <div className="space-y-8 relative">
            {/* Círculos decorativos */}
            <div className="absolute -top-10 -left-10 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute -top-5 left-20 w-2 h-2 bg-blue-400 rounded-full"></div>
            
            {/* Badge */}
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6 py-3 text-white text-xs font-satoshi-bold tracking-wider rounded-lg mb-4 shadow-lg" 
                    style={{background: 'linear-gradient(135deg, #5B73F5 0%, #7C8EF7 50%, #9FA8F9 100%)'}}>
                ACERCA DE NOSOTROS
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold text-white leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Somos<br/>
              <span className="font-satoshi-black text-8xl">Martek</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-100 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Especialistas en marketing digital y SEO con más de 5 años de experiencia. 
              Ayudamos a las empresas a crecer con estrategias orgánicas y resultados medibles.
            </motion.p>

            {/* Estadísticas */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-4xl font-satoshi-black text-white mb-2">500+</div>
                <div className="text-gray-200 text-sm font-satoshi-medium">Proyectos Completados</div>
              </div>
        <div className="text-center">
                <div className="text-4xl font-satoshi-black text-white mb-2">98%</div>
                <div className="text-gray-200 text-sm font-satoshi-medium">Clientes Satisfechos</div>
              </div>
            </motion.div>

            <motion.button 
              className="text-white px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105" 
              style={{background: 'linear-gradient(135deg, #5B73F5 0%, #7C8EF7 50%, #9FA8F9 100%)'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONOCE NUESTRO TRABAJO
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
          
          {/* Información adicional lado derecho */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Círculos decorativos del lado derecho */}
            <div className="absolute top-20 right-10 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-32 right-5 w-2 h-2 bg-orange-300 rounded-full"></div>
            
            <motion.div 
              className="relative max-w-lg pb-16"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Tarjetas de información */}
              <div className="space-y-4">
                
                {/* Misión */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-satoshi-bold text-white">Nuestra Misión</h3>
                  </div>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    Impulsar el crecimiento digital de las empresas a través de estrategias de SEO 
                    y marketing digital innovadoras y medibles.
                  </p>
                </motion.div>

                {/* Valores */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-satoshi-bold text-white">Nuestros Valores</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-100 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Transparencia total en nuestros procesos
                    </li>
                    <li className="flex items-center text-gray-100 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Resultados medibles y comprobables
                    </li>
                    <li className="flex items-center text-gray-100 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Innovación constante en cada proyecto
                    </li>
                  </ul>
                </motion.div>

                {/* Experiencia */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-satoshi-bold text-white">Experiencia</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-satoshi-black text-white">5+</div>
                      <div className="text-gray-200 text-xs">Años de Experiencia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-satoshi-black text-white">50+</div>
                      <div className="text-gray-200 text-xs">Clientes Activos</div>
                    </div>
                  </div>
                </motion.div>

                {/* Servicios principales */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-satoshi-bold text-white">Especialidades</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-gray-100 text-xs bg-white/10 px-2 py-1 rounded-full text-center">SEO</span>
                    <span className="text-gray-100 text-xs bg-white/10 px-2 py-1 rounded-full text-center">PPC</span>
                    <span className="text-gray-100 text-xs bg-white/10 px-2 py-1 rounded-full text-center">Social Media</span>
                    <span className="text-gray-100 text-xs bg-white/10 px-2 py-1 rounded-full text-center">Analytics</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Nubes decorativas inferiores */}
      <CloudsDecoration />
    </div>
  );
};

export default About;