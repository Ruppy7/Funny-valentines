import React from 'react';

const Valyes = () => {
  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Will you be my valentine?</h1>
        <div className="flex justify-center space-x-4">
          <div className="relative w-48 h-64 bg-pink-300 rounded-lg shadow-md transform hover:rotate-y-180 transition duration-500">
            <button className="absolute inset-0 w-full h-full bg-pink-400 text-white rounded-lg hover:bg-green-500 focus:outline-none focus:bg-green-600 text-lg">
              Yes
            </button>
          </div>
          <div className="relative w-48 h-64 bg-pink-300 rounded-lg shadow-md transform hover:rotate-y-180 transition duration-500">
            <button className="absolute inset-0 w-full h-full bg-pink-400 text-white rounded-lg hover:bg-red-800 focus:outline-none focus:bg-red-900 text-lg">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valyes;
