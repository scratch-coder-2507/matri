import { useState } from "react";
import MilanLogo from "../../assets/images/milanLogo.svg";
import LangLogo from "../../assets/images/langLogo.svg";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

    <header className="flex flex-col px-8 py-6 w-full bg-white border-b border-slate-200 justify-between items-center lg:inline-flex">
      {/* Mobile responsive sidebar */}
      <div className="flex">
        <div className="lg:hidden mr-4">
          <button
            onClick={toggleMenu}
            className="text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal"
          >
            <IoIosMenu size={30} />
          </button>
        </div>
        <div className="hidden grow shrink basis-0 justify-start items-center space-x-4 lg:flex">
          <div className="text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
            Home
          </div>
          {/* <div className="w-1 h-1 bg-red-600 rounded-full" /> */}
          <a
            href="#"
            className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal"
          >
            Active Members
          </a>
          <a
            href="#"
            className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal"
          >
            Premium Plans
          </a>
          <a
            href="#"
            className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal"
          >
            Happy Stories
          </a>
          <a
            href="#"
            className="text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal"
          >
            Contact us
          </a>
        </div>
        <img
          className="lg:w-48 lg:h-10 w-36 h-10 grow shrink basis-0 flex"
          src={MilanLogo}
        />
        <div className="grow shrink basis-0 h-12 px-4 justify-end items-start gap-3 flex">
          <div className="hidden px-5 py-3 rounded-lg justify-center items-center gap-2 lg:flex">
            <img className="w-6 h-6 rounded-full" src={LangLogo} />
            <div className="text-center text-zinc-800 text-base font-medium font-['Euclid Circular A'] leading-normal">
              English
            </div>
          </div>
          <div className=" hidden px-10 py-3 rounded-lg border border-slate-200 justify-center items-center gap-3 lg:flex">
            <button className="text-center text-red-600 text-base font-medium font-['Euclid Circular A'] leading-normal">
              Login
            </button>
          </div>
          <div className="hidden px-10 py-3 bg-red-600 rounded-lg justify-center items-center gap-3 lg:flex">
            <button className="text-center text-white text-base font-medium font-['Euclid Circular A'] leading-normal">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:hidden">
        {isMenuOpen && (
          <div className="mt-3">
            <a
              href="#"
              className="block py-2 text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal"
            >
              Active Members
            </a>
            <a
              href="#"
              className="block py-2 text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal"
            >
              Premium Plans
            </a>
            <a
              href="#"
              className="block py-2 text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal"
            >
              Happy Stories
            </a>
            <a
              href="#"
              className="block py-2 text-center text-zinc-800 text-base font-normal font-['Euclid Circular A'] leading-normal"
            >
              Contact us
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
