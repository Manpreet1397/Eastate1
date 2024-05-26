

import React from 'react';

const NetworkPage = () => {
  return (
    <div className="bg-neutral-800 min-h-screen text-white p-8 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">International Property Network</h1>
        <p className="mt-4 text-gray-400">Our Global reach opens doors for exclusive properties and new opportunities. Explore our network around the globe.</p>
      </div>
      
      <div className="h-screen flex justify-center items-center">
        <img src='map2.png' alt='image' className="object-cover h-full" />
      </div>
    </div>
  );
};

export default NetworkPage;
