import { useState } from 'react';
import logo from '../logo.png'; // Adjust path based on your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F5F8FF] border-b border-gray-300 w-full  z-10">
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Left Section: Logo + Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Fincycle Logo" className="h-10" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-[#071B35] hover:text-gray-700">
              Products
            </a>
            <a href="#" className="text-[#071B35] hover:text-gray-700">
              Resources
            </a>
            <a href="#" className="text-[#071B35] hover:text-gray-700">
              Pricing
            </a>
            <a href="#" className="text-[#071B35] hover:text-gray-700">
              Contact
            </a>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-[#071B35] hover:text-gray-700">Sign in</button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-3xl">
  Get Started
</button>

        </div>

        {/* Mobile Burger Menu */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-1">
          <a href="#" className="block text-[#071B35] hover:text-gray-700">
            Products
          </a>
          <a href="#" className="block text-[#071B35] hover:text-gray-700">
            Resources
          </a>
          <a href="#" className="block text-[#071B35] hover:text-gray-700">
            Pricing
          </a>
          <a href="#" className="block text-[#071B35] hover:text-gray-700">
            Contact
          </a>
          <button className="w-full text-left text-[#071B35] hover:text-gray-700 mt-2">
            Sign in
          </button>
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded mt-2">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}