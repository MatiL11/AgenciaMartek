import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  RocketLaunchIcon, 
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import CloudsDecoration from '../components/common/CloudsDecoration';
import TopCloudsDecoration from '../components/common/TopCloudsDecoration';

const Services = () => {
  const services = [
    {
      icon: MagnifyingGlassIcon,
      title: 'SEO & Optimización',
      description: 'Mejoramos tu visibilidad en motores de búsqueda con estrategias técnicas y de contenido.',
      features: ['Auditoría SEO completa', 'Investigación de palabras clave', 'Optimización on-page', 'Link building estratégico'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Marketing Digital',
      description: 'Creamos campañas efectivas que generan resultados medibles y ROI positivo.',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Marketing', 'LinkedIn Advertising'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GlobeAltIcon,
      title: 'Desarrollo Web',
      description: 'Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados para conversiones.',
      features: ['Diseño responsive', 'Optimización de velocidad', 'SEO técnico', 'Integración de analytics'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Marketing de Contenidos',
      description: 'Creamos contenido valioso que atrae, involucra y convierte a tu audiencia objetivo.',
      features: ['Blog posts optimizados', 'Infografías', 'Videos', 'E-books y guías'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Publicidad PPC',
      description: 'Gestionamos campañas de pago por clic para maximizar tu presupuesto publicitario.',
      features: ['Google Ads', 'Facebook Ads', 'Optimización continua', 'Reportes detallados'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Marketing',
      description: 'Desarrollamos estrategias de email marketing que nutren leads y aumentan ventas.',
      features: ['Automatización', 'Segmentación', 'A/B Testing', 'Análisis de rendimiento'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: PresentationChartLineIcon,
      title: 'Analytics & Reportes',
      description: 'Proporcionamos insights accionables basados en datos para optimizar tu estrategia.',
      features: ['Google Analytics', 'Reportes personalizados', 'KPIs clave', 'Recomendaciones'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Estrategia Digital',
      description: 'Desarrollamos planes integrales que alinean tus objetivos con las mejores prácticas digitales.',
      features: ['Auditoría completa', 'Plan estratégico', 'Roadmap de implementación', 'Seguimiento mensual'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Proyectos Completados' },
    { number: '98%', label: 'Clientes Satisfechos' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '24/7', label: 'Soporte Técnico' }
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
              NUESTROS SERVICIOS
            </span>
            
            <h1 className="text-5xl md:text-6xl font-satoshi-bold text-white mb-6 leading-tight">
              Soluciones Digitales<br/>
              <span className="font-satoshi-black">Completas</span>
            </h1>
            
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ofrecemos servicios integrales de marketing digital, SEO, desarrollo web y estrategia digital 
              para impulsar el crecimiento de tu negocio online.
            </p>
          </motion.div>
        </div>
        
        <CloudsDecoration />
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="rounded-2xl p-8 backdrop-blur-sm border border-blue-200/30 hover:border-blue-300/50 transition-all duration-300 group relative overflow-hidden"
                style={{background: 'linear-gradient(135deg, rgba(59, 87, 237, 0.1) 0%, rgba(91, 115, 245, 0.1) 50%, rgba(124, 142, 247, 0.1) 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-2xl backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                     style={{background: 'linear-gradient(135deg, rgba(59, 87, 237, 0.2) 0%, rgba(91, 115, 245, 0.2) 50%, rgba(124, 142, 247, 0.2) 100%)'}}>
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-satoshi-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;