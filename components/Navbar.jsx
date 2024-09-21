'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-30 py-3 px-4 sm:px-8 flex flex-wrap justify-between items-center fixed top-4 left-0 right-0 sm:left-1/4 sm:right-1/4 md:left-0 md:right-0 lg:left-1/6 lg:right-1/6 z-50 rounded-lg border border-gray-900">
      <div className="flex items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <span className="text-gray-500">p<span className="text-gray-500">-</span></span>fi
        </Link>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-white focus:outline-none"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto lg:items-center lg:space-x-8 mt-4 lg:mt-0`}>
        <div className="flex flex-col items-end lg:flex-row lg:items-center">
          <Link href="/" className="block lg:inline-block text-white hover:text-yellow-400 px-4 py-2 lg:py-0">Home</Link>
          <Link href="/solutions" className="block lg:inline-block text-white hover:text-yellow-400 px-4 py-2 lg:py-0">Solutions</Link> 
          {/*<Link href="/about" className="block lg:inline-block text-white hover:text-yellow-400 px-4 py-2 lg:py-0">About Us</Link>*/}
          <Link href="/contact" className="block lg:inline-block bg-yellow-400 text-black font-semibold py-2 px-5 rounded-full hover:bg-yellow-500 mt-3 lg:mt-0 lg:ml-2">
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
