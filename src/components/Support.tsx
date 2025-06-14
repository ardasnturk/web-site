// No import needed for React 19 with new JSX transform

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center">
      <div className="container max-w-lg mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            Support
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
            If you have any questions, feedback, or need help with the App, feel
            free to reach out to us.
          </p>
          <a
            href="mailto:ardasnturk@me.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Support
          </a>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              &copy; 2025 Arda Sentürk | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
