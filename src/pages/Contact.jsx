import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import CloudsDecoration from '../components/common/CloudsDecoration';
import TopCloudsDecoration from '../components/common/TopCloudsDecoration';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Teléfono',
      content: '1 800 222 000',
      description: 'Lunes a Viernes 9:00 - 18:00'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'info@martek.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: MapPinIcon,
      title: 'Dirección',
      content: 'Av. Principal 123, Ciudad',
      description: 'Estado 12345, México'
    },
    {
      icon: ClockIcon,
      title: 'Horarios',
      content: 'Lunes - Viernes',
      description: '9:00 AM - 6:00 PM'
    }
  ];

  const services = [
    'SEO & Marketing Digital',
    'Desarrollo Web',
    'Publicidad PPC',
    'Marketing de Contenidos',
    'Email Marketing',
    'Analytics & Reportes'
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
              CONTÁCTANOS
            </span>

            <h1 className="text-5xl md:text-6xl font-satoshi-bold text-white mb-6 leading-tight">
              Hablemos de tu<br/>
              <span className="font-satoshi-black">Proyecto</span>
            </h1>

            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              ¿Listo para impulsar tu presencia online? Contáctanos para una consulta gratuita
              y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
          </motion.div>
        </div>

        <CloudsDecoration />
      </div>

      {/* Contact Content */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-satoshi-bold text-gray-900 mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0"
                         style={{background: 'linear-gradient(135deg, #5B73F5 0%, #7C8EF7 50%, #9FA8F9 100%)'}}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-satoshi-bold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 font-satoshi-medium text-lg mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Beneficios */}
              <div className="mt-12 p-8 rounded-2xl"
                   style={{background: 'linear-gradient(135deg, rgba(59, 87, 237, 0.05) 0%, rgba(91, 115, 245, 0.05) 50%, rgba(124, 142, 247, 0.05) 100%)'}}>
                <div className="flex items-center mb-6">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-satoshi-bold text-gray-900">
                    ¿Por qué elegirnos?
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Consulta gratuita sin compromiso
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Respuesta en menos de 24 horas
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Estrategia personalizada para tu negocio
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Resultados medibles y comprobables
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-satoshi-bold text-gray-900 mb-6">
                  Envíanos un Mensaje
                </h2>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-satoshi-bold text-gray-900 mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-gray-600">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-satoshi-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-satoshi-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-satoshi-medium text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-satoshi-medium text-gray-700 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-satoshi-medium text-gray-700 mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-satoshi-medium text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-lg font-satoshi-bold text-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{background: 'linear-gradient(135deg, #5B73F5 0%, #7C8EF7 50%, #9FA8F9 100%)'}}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Enviando...' : 'ENVIAR MENSAJE'}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;