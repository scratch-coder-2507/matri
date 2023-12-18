import React from "react";
import MilanLogo from '../../assets/images/milanLogo.svg';
import LangLogo from "../../assets/images/langLogo.svg";

const Header = () => {
  return (
    // <header className="text-black p-4 flex justify-between items-center">
    //   {/* Left-aligned Menu */}
    //   <div className="flex items-center space-x-4">
    //     {/* Add your menu items here */}
    //     <a href="#" className="hover:text-gray-300">Home</a>
    //     <a href="#" className="hover:text-gray-300">Active Members</a>
    //     <a href="#" className="hover:text-gray-300">Premium Plans</a>
    //     <a href="#" className="hover:text-gray-300">Happy Stories</a>
    //     <a href="#" className="hover:text-gray-300">Contact us</a>
    //   </div>

    //   {/* Centered Logo */}
    //   <div className="flex items-center flex-grow justify-center">
    //     <img src="your-logo.png" alt="Logo" className="h-8" />
    //   </div>

    //   {/* Right-aligned Login Button */}
    //   <div className="mx-4">
    //     <button className="bg-white
    //     border-gray-200
    //     outline outline-2 outline-gray-200 text-orange-600 font-bold py-2 px-5 rounded mr-2">
    //       Login
    //     </button>
    //     <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-5 rounded">
    //       Register
    //     </button>
    //   </div>
    // </header>

    <header className="px-8 py-6 w-full bg-white border-b border-slate-200 justify-between items-center inline-flex">
      <div className="grow shrink basis-0 justify-start items-center space-x-4 flex">
        <div className="text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
          Home
        </div>
        {/* <div className="w-1 h-1 bg-red-600 rounded-full" /> */}
        <a href="#" className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal">
          Active Members
        </a>
        <a href="#" className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal">
          Premium Plans
        </a>
        <a href="#" className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal">
          Happy Stories
        </a>
        <a href="#" className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal">
          Contact us
        </a>
      </div>
      <img className="w-48 h-10 grow shrink basis-0 flex" src={MilanLogo} />
      <div className="grow shrink basis-0 h-12 px-4 justify-end items-start gap-3 flex">
        <div className="px-5 py-3 rounded-lg justify-center items-center gap-2 flex">
          <img
            className="w-6 h-6 rounded-full"
            src={LangLogo}
          />
          <div className="text-center text-zinc-800 text-base font-medium font-['Euclid Circular A'] leading-normal">
            English
          </div>
        </div>
        <div className="px-10 py-3 rounded-lg border border-slate-200 justify-center items-center gap-3 flex">
          <button className="text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
            Login
          </button>
        </div>
        <div className="px-10 py-3 bg-red-600 rounded-lg justify-center items-center gap-3 flex">
          <button className="text-center text-white text-base font-medium font-['Euclid Circular A'] leading-normal">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
