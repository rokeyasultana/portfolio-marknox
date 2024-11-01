import React, { useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-10 top-0 left-0 p-4 h-[90px] mt-[-20px] border-b-2 border-gray-500">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className="h-[120px] w-auto mt-[-10px]" />
        </div>
        <div className="hidden md:flex space-x-6 mx-4 mt-[-40px]">
          <a
            href="#home"
            className="text-gray-500 hover:text-gray-400 text-xl"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-500 hover:text-gray-400 text-xl"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-500 hover:text-gray-400 text-xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-500 hover:text-gray-400 text-xl"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mx-4 bg-gray-400`}>
        <a
          href="#home"
          className="block text-white  p-2 text-xl"
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-white p-2 text-xl"
        >
          About
        </a>
        <a
          href="#projects"
          className="block text-white p-2 text-xl"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block text-white p-2 text-xl"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
