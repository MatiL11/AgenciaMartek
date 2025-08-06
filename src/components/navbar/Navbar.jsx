import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { routes } from '../../routes/routeConfig';
import martekLogo from '../../assets/Logos/martek_logo_round_white.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/5 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side: Logo + Menu */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img 
                  src={martekLogo} 
                  alt="Martek Agency" 
                  className="h-24 w-24"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`font-satoshi-medium px-3 py-2 text-lg font-medium transition-colors ${
                      isActive(route.path)
                        ? 'text-white font-semibold'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side: Phone + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-gray-200">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-md font-satoshi-medium">1 800 222 000</span>
            </div>
            <Link
              to="/contact"
              className="font-satoshi-bold bg-gray-800/80 hover:bg-gray-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md border border-white/20"
            >
              GET A QUOTE
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md border-t border-white/20">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(route.path)
                      ? 'text-white bg-white/20'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {route.name}
                </Link>
              ))}
              <div className="border-t border-white/20 pt-3 mt-3">
                <div className="flex items-center px-3 py-2 text-gray-200">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">1 800 222 000</span>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-3 mt-2 bg-gray-800/80 hover:bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium text-center transition-all duration-200 border border-white/20"
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;