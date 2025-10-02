import { Link } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';
import martekLogo from '../../assets/Logos/martek_logo_round_white.png';
import TopCloudsDecoration from '../common/TopCloudsDecoration';

const Footer = () => {
  return (
    <footer className="relative" style={{background: 'linear-gradient(135deg, #3957ED 0%, #5B73F5 50%, #7C8EF7 100%)'}}>

    <TopCloudsDecoration />
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Columna 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src={martekLogo} 
                alt="Martek Agency" 
                className="h-16 w-16"
              />
              <span className="ml-4 text-3xl font-satoshi-bold text-white">Martek</span>
            </div>
            <p className="text-gray-100 text-lg font-satoshi-medium leading-relaxed mb-8 max-w-sm">
              Especialistas en marketing digital y SEO. Ayudamos a las empresas a crecer 
              con estrategias orgánicas y resultados medibles.
            </p>
            <div className="flex space-x-4">
              {/* Redes sociales */}
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces de navegación */}
          <div>
            <h3 className="text-xl font-satoshi-bold text-white mb-8">Navegación</h3>
            <ul className="space-y-4">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path}
                    className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium"
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-xl font-satoshi-bold text-white mb-8">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                  SEO & Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                  Análisis Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                  Estrategia de Contenido
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                  Publicidad Online
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                  Desarrollo Web
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-xl font-satoshi-bold text-white mb-8">Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-white mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-100 text-lg font-satoshi-medium">
                    Av. Principal 123<br />
                    Ciudad, Estado 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 text-white mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:1800222000" className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                  1 800 222 000
                </a>
              </div>
              
              <div className="flex items-center">
                <svg className="w-6 h-6 text-white mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@martek.com" className="text-gray-100 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                  info@martek.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-200 text-lg font-satoshi-medium mb-4 md:mb-0">
              © 2024 Agencia Martek. Todos los derechos reservados.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200 text-lg font-satoshi-medium">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
