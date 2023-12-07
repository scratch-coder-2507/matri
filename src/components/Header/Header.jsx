import React from "react";

const Header = () => {
  return (
    <header className="text-black p-4 flex justify-between items-center">
      {/* Left-aligned Menu */}
      <div className="flex items-center space-x-4">
        {/* Add your menu items here */}
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Active Members</a>
        <a href="#" className="hover:text-gray-300">Premium Plans</a>
        <a href="#" className="hover:text-gray-300">Happy Stories</a>
        <a href="#" className="hover:text-gray-300">Contact us</a>
      </div>

      {/* Centered Logo */}
      <div className="flex items-center flex-grow justify-center">
        <img src="your-logo.png" alt="Logo" className="h-8" />
      </div>

      {/* Right-aligned Login Button */}
      <div className="mx-4">
        <button className="bg-white
        border-gray-200 
        outline outline-2 outline-gray-200 text-orange-600 font-bold py-2 px-5 rounded mr-2">
          Login
        </button>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-5 rounded">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
