import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const OurServices = () => {
  return (
    <div className="py-16 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-satoshi-bold text-gray-900 mb-4">
            Social marketing services
          </h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Real time analytics */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <MagnifyingGlassIcon className="w-16 h-16 text-gray-800 stroke-1" />
            </div>
            <h3 className="text-lg font-satoshi-bold  text-gray-900 mb-4">Real time analytics</h3>
            <p className="text-gray-600 text-md font-satoshi-medium leading-relaxed">
              We deliver email marketing campaigns to your audience.
            </p>
          </div>

          {/* Keywords analytics */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <GlobeAltIcon className="w-16 h-16 text-gray-800 stroke-1" />
            </div>
            <h3 className="text-lg font-satoshi-bold text-gray-900 mb-4">Keywords analytics</h3>
            <p className="text-gray-600 text-md font-satoshi-medium leading-relaxed">
              We also help our clients with social media strategy.
            </p>
          </div>

          {/* SEO optimization */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <ChartBarIcon className="w-16 h-16 text-gray-800 stroke-1" />
            </div>
            <h3 className="text-lg font-satoshi-bold text-gray-900 mb-4">SEO optimization</h3>
            <p className="text-gray-600 text-md font-satoshi-medium leading-relaxed">
              We believe in challenges and so we have made challenges.
            </p>
          </div>

          {/* Boost performance */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <RocketLaunchIcon className="w-16 h-16 text-gray-800 stroke-1" />
            </div>
            <h3 className="text-lg font-satoshi-bold text-gray-900 mb-4">Boost performance</h3>
            <p className="text-gray-600 text-md font-satoshi-medium leading-relaxed">
              Team delivers incomparable quality with designing.
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid pt-12 grid-cols-1 font-satoshi-bold md:grid-cols-3 gap-8">
          {/* 99% Track and analyze */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-6xl text-gray-900 mb-2">99<span className="text-3xl">%</span></div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Track and analyze</h4>
            <p className="text-gray-600 text-sm">business reports</p>
          </div>

          {/* 4.98 Best rated agency */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-6xl font-black text-gray-900 mb-2">4.98</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gray-900 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Best rated agency</h4>
          </div>

          {/* 98% Genuine repeated */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-6xl font-black text-gray-900 mb-2">98<span className="text-3xl">%</span></div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Genuine repeated</h4>
            <p className="text-gray-600 text-sm">happy customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;