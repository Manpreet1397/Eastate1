import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-12 w-auto mr-2" />
            
          </div>
          
          <div className="hidden md:flex items-center">
            <button className="mr-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-300">About Us</button>
            <button className="mr-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-300">Property</button>
            <button className="mr-4 bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-300">Agent</button>
            <button className="bg-black text-white font-semibold py-2 px-4 rounded-2xl hover:bg-gray-900  focus:outline-none focus:bg-gray-900 transition duration-300">Contact Us</button>
          </div>
          
          <div className="md:hidden">
           
            <button className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
