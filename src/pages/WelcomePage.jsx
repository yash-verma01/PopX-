import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6 bg-white">
      {/* Logo/Icon section */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
          <span className="text-white font-bold">1</span>
        </div>
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
          <span className="text-white font-bold">2</span>
        </div>
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">3</span>
        </div>
      </div>

      {/* Content and buttons section */}
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate('/create-account')}
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg mb-4 hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-purple-200 text-purple-600 font-semibold py-3 rounded-lg hover:bg-purple-300 transition-colors"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;