const Hero = () => {
  return (
    <div className="h-screen relative" style={{background: 'linear-gradient(135deg, #3957ED 0%, #5B73F5 50%, #7C8EF7 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Contenido principal */}
          <div className="space-y-8 relative">
            {/* Círculos decorativos */}
            <div className="absolute -top-10 -left-10 w-4 h-4 bg-white/20 rounded-full"></div>
            <div className="absolute -top-5 left-20 w-2 h-2 bg-blue-400 rounded-full"></div>
            
            <h1 className="text-8xl lg:text-8xl font-bold text-white leading-none">
              Organic<br/>
              <span className="font-satoshi-black text-9xl">results</span>
            </h1>
            <p className="text-lg text-gray-100 max-w-md">
              We offer flexible pricing plans so that our clients can take advantage of services.
            </p>
            <button className="text-white px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105" 
                    style={{background: 'linear-gradient(135deg, #5B73F5 0%, #7C8EF7 50%, #9FA8F9 100%)'}}>
              GET FREE ANALYSIS
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Cohete mejorado */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Círculos decorativos del lado derecho */}
            <div className="absolute top-20 right-10 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-32 right-5 w-2 h-2 bg-orange-300 rounded-full"></div>
            
            <div className="relative">
              {/* Cohete principal */}
              <div className="w-64 h-80 relative">
                {/* Cuerpo del cohete */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-48 bg-white rounded-t-full shadow-lg">
                  {/* Ventana del cohete */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  {/* Logo seo */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-gray-800 font-bold text-sm">
                    seo
                  </div>
                </div>
                
                {/* Aletas del cohete */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="absolute -left-8 w-0 h-0 border-l-8 border-r-0 border-b-16 border-l-transparent border-r-transparent border-b-orange-500"></div>
                  <div className="absolute -right-8 w-0 h-0 border-r-8 border-l-0 border-b-16 border-r-transparent border-l-transparent border-b-orange-500"></div>
                </div>
                
                {/* Propulsores */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-blue-500 to-purple-600 rounded-b-lg"></div>
                
                {/* Llamas del cohete */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                  <div className="w-3 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Anillos orbitales */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-200/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-200/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Nubes decorativas en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Círculos blancos para simular nubes - Cobertura total incluyendo extremos */}
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute -bottom-4 left-12 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-8 left-24 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-2 left-36 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute -bottom-10 left-48 w-36 h-36 bg-white rounded-full"></div>
          
          <div className="absolute -bottom-3 left-60 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-7 left-72 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute -bottom-1 left-84 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute -bottom-9 left-96 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-4 left-108 w-24 h-24 bg-white rounded-full"></div>
          
          <div className="absolute -bottom-8 left-120 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute -bottom-11 left-132 w-36 h-36 bg-white rounded-full"></div>
          <div className="absolute -bottom-2 left-144 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute -bottom-6 left-156 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-3 left-168 w-28 h-28 bg-white rounded-full"></div>
          
          <div className="absolute -bottom-9 left-180 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-5 left-192 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-10 left-204 w-36 h-36 bg-white rounded-full"></div>
          <div className="absolute -bottom-1 left-216 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute -bottom-7 left-228 w-28 h-28 bg-white rounded-full"></div>
          
          <div className="absolute -bottom-4 left-240 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-8 left-252 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-11 left-264 w-36 h-36 bg-white rounded-full"></div>
          <div className="absolute -bottom-2 left-276 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute -bottom-6 left-288 w-28 h-28 bg-white rounded-full"></div>
          
          <div className="absolute -bottom-3 left-300 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-9 left-312 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-5 left-324 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute -bottom-10 left-336 w-36 h-36 bg-white rounded-full"></div>
          <div className="absolute -bottom-1 left-348 w-20 h-20 bg-white rounded-full"></div>
          
          {/* Círculos adicionales para llenar espacios */}
          <div className="absolute -bottom-7 left-360 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute -bottom-4 left-372 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-8 left-384 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-2 left-396 w-20 h-20 bg-white rounded-full"></div>
          
          {/* Círculos del lado derecho */}
          <div className="absolute -bottom-9 right-96 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-5 right-84 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute -bottom-10 right-72 w-36 h-36 bg-white rounded-full"></div>
          <div className="absolute -bottom-3 right-60 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-7 right-48 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute -bottom-1 right-36 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute -bottom-8 right-24 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-4 right-12 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;