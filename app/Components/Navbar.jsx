'use client';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-[#001f3f] shadow-md fixed top-0 w-full z-50">
      <div
        className="container mx-auto flex justify-between items-center px-6 py-4 md:py-5"
        data-aos="fade-down"
      >
        {/* Logo Section */}
        <div className="flex-shrink-0 text-[#000000]">
          
          <img width={100} height={100} src="./walruslogo.png" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-16 font-medium">
          <a
            href="/"
            className="relative group hover:text-black transition-colors duration-300"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="./AboutUs"
            className="relative group hover:text-black transition-colors duration-300"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/Services"
            className="relative group hover:text-black transition-colors duration-300"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a
            href="tel:+971 507 304 759"
            className="ml-4 px-4 py-2 bg-[#001f3f] text-white font-semibold rounded hover:bg-black transition-colors duration-300 text-sm md:text-base"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-[#001f3f] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
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
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden md:hidden bg-white text-[#001f3f] flex flex-col justify-center items-center`}
      >
        <a
          href="/"
          onClick={handleCloseMenu}
          className="block px-4 py-2 text-center relative group hover:bg-[#f0f0f0] hover:text-black transition-colors duration-300"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="./AboutUs"
          onClick={handleCloseMenu}
          className="block px-4 py-2 text-center relative group hover:bg-[#f0f0f0] hover:text-black transition-colors duration-300"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="/Services"
          onClick={handleCloseMenu}
          className="block px-4 py-2 text-center relative group hover:bg-[#f0f0f0] hover:text-black transition-colors duration-300"
        >
          Services
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
       
        <a
          href="#contact"
          onClick={handleCloseMenu}
          className="block mx-4 my-2 px-4 py-2 bg-[#001f3f] text-white font-semibold rounded hover:bg-black transition-colors duration-300 text-center text-sm"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
