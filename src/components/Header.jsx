import React, { useState } from "react";

const Header = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 from-blue-500 to-pink-600 overflow-x-hidden">
      {/* Logo */}
      <div className="text-3xl font-bold">XYZ STORE</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex md:items-center md:space-x-12 text-1xl font-bold">
        <a href="#home" className="hover:text-yellow-300">HOME</a>
        <a href="#products" className="hover:text-yellow-300">PRODUCTS</a>
        <a href="#explore" className="hover:text-yellow-300">EXPLORE</a>
        <a href="#about" className="hover:text-yellow-300">ABOUT US</a>
        <a href="#love-it" className="hover:text-yellow-300">LOVE IT</a>
      </nav>

      {/* Hamburger Icon (only visible on mobile) */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white focus:outline-none"
        >
          {/* Icon changes based on `isOpen` state */}
          <svg 
            className="w-8 h-8" 
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
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (only visible when `isOpen` is true) */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-pink-600 transition transform duration-300 ease-in-out overflow-x-hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-6 py-4 text-xl font-bold">
          <li><a href="#home" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>HOME</a></li>
          <li><a href="#products" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>PRODUCTS</a></li>
          <li><a href="#explore" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>EXPLORE</a></li>
          <li><a href="#about" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>ABOUT US</a></li>
          <li><a href="#love-it" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>LOVE IT</a></li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="hidden md:flex space-x-4">
        <button
          className="border-2 border-white text-black font-bold px-8 py-2 rounded-3xl"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.65)' }}
        >
          Shop
        </button>
        <button className="bg-yellow-500 text-black px-8 py-2 rounded-3xl font-bold border-2 border-white">LOGIN</button>
      </div>
    </header>
  );
};

export default Header;
