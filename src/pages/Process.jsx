import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  LightBulbIcon, 
  CogIcon, 
  RocketLaunchIcon,
  ChartBarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import CloudsDecoration from '../components/common/CloudsDecoration';
import TopCloudsDecoration from '../components/common/TopCloudsDecoration';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      icon: MagnifyingGlassIcon,
      title: 'Análisis y Auditoría',
      description: 'Realizamos un análisis completo de tu situación actual, competencia y oportunidades de mercado.',
      details: [
        'Auditoría SEO completa',
        'Análisis de competencia',
        'Investigación de mercado',
        'Evaluación de KPIs actuales'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      icon: LightBulbIcon,
      title: 'Estrategia Personalizada',
      description: 'Desarrollamos una estrategia única basada en tus objetivos y el análisis previo.',
      details: [
        'Definición de objetivos SMART',
        'Estrategia de contenido',
        'Plan de medios digitales',
        'Cronograma de implementación'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      icon: CogIcon,
      title: 'Implementación',
      description: 'Ejecutamos la estrategia con precisión y seguimiento constante de cada detalle.',
      details: [
        'Optimización técnica',
        'Creación de contenido',
        'Configuración de campañas',
        'Integración de herramientas'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '04',
      icon: ChartBarIcon,
      title: 'Monitoreo y Análisis',
      description: 'Seguimos el rendimiento y analizamos los resultados para optimizar continuamente.',
      details: [
        'Reportes semanales',
        'Análisis de métricas',
        'Optimización A/B',
        'Ajustes estratégicos'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '05',
      icon: RocketLaunchIcon,
      title: 'Escalamiento',
      description: 'Ampliamos las estrategias exitosas para maximizar el crecimiento de tu negocio.',
      details: [
        'Expansión de campañas',
        'Nuevos canales digitales',
        'Optimización de presupuesto',
        'Crecimiento sostenible'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      number: '06',
      icon: CheckCircleIcon,
      title: 'Resultados y Optimización',
      description: 'Entregamos resultados medibles y optimizamos continuamente para el éxito a largo plazo.',
      details: [
        'Reportes de ROI',
        'Optimización continua',
        'Estrategias de retención',
        'Planificación futura'
      ],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const benefits = [
    'Proceso probado y optimizado',
    'Comunicación transparente',
    'Resultados medibles',
    'Soporte 24/7',
    'Flexibilidad y adaptabilidad',
    'Enfoque en ROI'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-30" style={{background: 'linear-gradient(135deg, #3957ED 0%, #5B73F5 50%, #7C8EF7 100%)'}}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 text-white text-xs font-satoshi-bold tracking-wider rounded-lg mb-6 shadow-lg" 
                  style={{background: 'linear-gradient(135deg, #5B73F5 0%, #7C8EF7 50%, #9FA8F9 100%)'}}>
              NUESTRO PROCESO
            </span>
            
            <h1 className="text-5xl md:text-6xl font-satoshi-bold text-white mb-6 leading-tight">
              Cómo Trabajamos<br/>
              <span className="font-satoshi-black">Para Ti</span>
            </h1>
            
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Nuestro proceso estructurado de 6 pasos garantiza resultados excepcionales 
              y un crecimiento sostenible para tu negocio digital.
            </p>
          </motion.div>
        </div>
        
        <CloudsDecoration />
      </div>

      {/* Benefits Section */}
      <div className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-satoshi-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Nuestro Proceso?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro enfoque estructurado y probado garantiza resultados consistentes 
              y un crecimiento sostenible para tu negocio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircleIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-satoshi-bold text-gray-900 mb-2">
                  {benefit}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-40 relative" style={{background: 'linear-gradient(135deg, #3957ED 0%, #5B73F5 50%, #7C8EF7 100%)'}}>
        <TopCloudsDecoration />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
                style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Número del paso */}
                <div className="absolute top-6 right-6 text-6xl font-satoshi-black text-white/20">
                  {step.number}
                </div>

                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl backdrop-blur-sm flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300"
                       style={{background: `linear-gradient(135deg, ${step.color.split(' ')[1]} 0%, ${step.color.split(' ')[3]} 100%)`}}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-satoshi-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-100 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-100">
                      <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <CloudsDecoration />
      </div>
    </div>
  );
};

export default Process;