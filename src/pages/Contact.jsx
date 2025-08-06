const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            ¿Listo para impulsar tu presencia online? Contáctanos para una consulta gratuita.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg font-medium">1 800 222 000</span>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-colors">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;