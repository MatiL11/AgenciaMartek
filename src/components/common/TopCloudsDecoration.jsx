const TopCloudsDecoration = ({ className = "" }) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-32 overflow-hidden ${className}`}>
      <div className="relative w-full h-full">
        {/* Círculos blancos para simular nubes en la parte superior */}
        <div className="absolute -top-6 -left-6 w-28 h-28 bg-white rounded-full"></div>
        <div className="absolute -top-4 left-12 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-8 left-24 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute -top-2 left-36 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute -top-10 left-48 w-36 h-36 bg-white rounded-full"></div>
        
        <div className="absolute -top-3 left-60 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-7 left-72 w-28 h-28 bg-white rounded-full"></div>
        <div className="absolute -top-1 left-84 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute -top-9 left-96 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute -top-4 left-108 w-24 h-24 bg-white rounded-full"></div>
        
        <div className="absolute -top-8 left-120 w-28 h-28 bg-white rounded-full"></div>
        <div className="absolute -top-11 left-132 w-36 h-36 bg-white rounded-full"></div>
        <div className="absolute -top-2 left-144 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute -top-6 left-156 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-3 left-168 w-28 h-28 bg-white rounded-full"></div>
        
        <div className="absolute -top-9 left-180 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute -top-5 left-192 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-10 left-204 w-36 h-36 bg-white rounded-full"></div>
        <div className="absolute -top-1 left-216 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute -top-7 left-228 w-28 h-28 bg-white rounded-full"></div>
        
        <div className="absolute -top-4 left-240 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-8 left-252 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute -top-11 left-264 w-36 h-36 bg-white rounded-full"></div>
        <div className="absolute -top-2 left-276 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute -top-6 left-288 w-28 h-28 bg-white rounded-full"></div>
        
        <div className="absolute -top-3 left-300 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-9 left-312 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute -top-5 left-324 w-28 h-28 bg-white rounded-full"></div>
        <div className="absolute -top-10 left-336 w-36 h-36 bg-white rounded-full"></div>
        <div className="absolute -top-1 left-348 w-20 h-20 bg-white rounded-full"></div>
        
        {/* Círculos adicionales para llenar espacios */}
        <div className="absolute -top-7 left-360 w-28 h-28 bg-white rounded-full"></div>
        <div className="absolute -top-4 left-372 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-8 left-384 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute -top-2 left-396 w-20 h-20 bg-white rounded-full"></div>
        
        {/* Círculos del lado derecho */}
        <div className="absolute -top-9 right-96 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute -top-5 right-84 w-28 h-28 bg-white rounded-full"></div>
        <div className="absolute -top-10 right-72 w-36 h-36 bg-white rounded-full"></div>
        <div className="absolute -top-3 right-60 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-7 right-48 w-28 h-28 bg-white rounded-full"></div>
        <div className="absolute -top-1 right-36 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute -top-8 right-24 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute -top-4 right-12 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute -top-6 -right-6 w-28 h-28 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default TopCloudsDecoration;