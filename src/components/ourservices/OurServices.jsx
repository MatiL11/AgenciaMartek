const OurServices = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Social marketing services
          </h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Real time analytics */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real time analytics</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We deliver email marketing campaigns to your audience.
            </p>
          </div>

          {/* Keywords analytics */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Keywords analytics</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We also help our clients with social media strategy.
            </p>
          </div>

          {/* SEO optimization */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO optimization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We believe in challenges and so we have made challenges.
            </p>
          </div>

          {/* Boost performance */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Boost performance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Team delivers incomparable quality with designing.
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 99% Track and analyze */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-100">
            <div className="text-5xl font-bold text-gray-900 mb-2">99<span className="text-2xl">%</span></div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Track and analyze</h4>
            <p className="text-gray-600 text-sm">business reports</p>
          </div>

          {/* 4.98 Best rated agency */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-100">
            <div className="text-5xl font-bold text-gray-900 mb-2">4.98</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Best rated agency</h4>
          </div>

          {/* 98% Genuine repeated */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-100">
            <div className="text-5xl font-bold text-gray-900 mb-2">98<span className="text-2xl">%</span></div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Genuine repeated</h4>
            <p className="text-gray-600 text-sm">happy customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;