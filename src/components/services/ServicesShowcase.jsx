import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import KeywordChart from './charts/KeywordChart';

const ServicesShowcase = () => {
  const [activeTab, setActiveTab] = useState('keyword');

  const services = {
    keyword: {
      title: 'Keywords lead to customers.',
      description: 'We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge and expertise.',
      badge: 'KEYWORD RESEARCH',
      image: '/api/placeholder/500/400', // Reemplaza con tu imagen
      features: [
        'Comprehensive keyword analysis',
        'Competitor research',
        'Search volume insights',
        'Long-tail keyword discovery'
      ]
    },
    target: {
      title: 'Power your online visibility.',
      description: 'We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge and expertise.',
      badge: 'TARGET ANALYSIS',
      image: '/api/placeholder/500/400',
      features: [
        'Audience segmentation',
        'Demographic analysis',
        'Behavioral insights',
        'Customer journey mapping'
      ]
    },
    social: {
      title: 'Brand identity and strategy.',
      description: 'We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge and expertise.',
      badge: 'SOCIAL MARKETING',
      image: '/api/placeholder/500/400',
      features: [
        'Content strategy',
        'Community management',
        'Paid social campaigns',
        'Analytics and reporting'
      ]
    },
    email: {
      title: 'Email campaigns that work.',
      description: 'We are committed to deliver unique digital media solutions from web design to eCommerce solutions for our clients by using our knowledge and expertise.',
      badge: 'EMAIL CAMPAIGN',
      image: '/api/placeholder/500/400',
      features: [
        'Email automation',
        'Personalization',
        'A/B testing',
        'Performance tracking'
      ]
    }
  };

  const tabs = [
    { id: 'keyword', label: 'Keyword research' },
    { id: 'target', label: 'Target analysis' },
    { id: 'social', label: 'Social marketing' },
    { id: 'email', label: 'Email campaign' }
  ];

  const currentService = services[activeTab];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pestañas de navegación */}
        <div className="flex flex-wrap justify-center mb-16 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-4 text-lg font-satoshi-medium transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido dinámico */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Imagen/Gráfico lado izquierdo */}
          <div className="order-2 lg:order-1">
            <KeywordChart activeTab={activeTab} />
          </div>

          {/* Contenido lado derecho */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-xs font-satoshi-bold tracking-wider rounded-lg mb-4 bg-purple-100 text-purple-600">
                {currentService.badge}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-satoshi-bold text-gray-900 mb-6 leading-tight">
              {currentService.title}
            </h2>
            
            <p className="text-gray-600 text-lg font-satoshi-medium leading-relaxed mb-8">
              {currentService.description}
            </p>

            {/* Lista de características */}
            <div className="mb-8">
              <ul className="space-y-3">
                {currentService.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center text-gray-700 font-satoshi-medium"
                  >
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.button 
              className="inline-flex items-center text-gray-900 font-satoshi-bold text-sm tracking-wider hover:text-blue-600 transition-colors duration-200"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              LEARN MORE
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesShowcase;