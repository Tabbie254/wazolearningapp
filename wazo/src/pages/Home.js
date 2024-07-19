import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-center p-6">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to Wazo</h2>
      <p className="text-xl text-gray-700 max-w-md">
        Interactive Learning Modules for Everyone
      </p>
    </div>
  );
};

export default Home;
