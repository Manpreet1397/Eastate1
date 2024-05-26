import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center" style={{backgroundImage: `url('hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="w-full max-w-md p-6 rounded-lg bg-white">

        <div className="flex flex-col items-start space-y-4">
          <div className="flex bg-white w-full md:w-auto space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="propertyType" value="buy" />
              <span className="ml-2">Buy</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="propertyType" value="sell" />
              <span className="ml-2">Sell</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="propertyType" value="rent" />
              <span className="ml-2">Rent</span>
            </label>
          </div>
          <div className="flex bg-white w-full md:w-auto space-x-4">
            <input type="text" placeholder="Location" className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md shadow-sm py-2 px-4" />
            <input type="text" placeholder="Property Type" className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md shadow-sm py-2 px-4" />
            <input type="text" placeholder="Price Range" className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md shadow-sm py-2 px-4" />
          </div>
          <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md">Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
