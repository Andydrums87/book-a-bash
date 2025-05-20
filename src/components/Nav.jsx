import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative z-50">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative">
        <div className="flex items-center">
          <img src="/logo-darker.png" alt="BookABash Logo" className="h-70 absolute left-0 py-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-[#707070] hover:text-[#FC6B57] transition-colors">
            Browse
          </Link>
          <Link to="/how-it-works" className="text-[#707070] hover:text-[#FC6B57] transition-colors">
            How It Works
          </Link>
          <Link to="/blog" className="text-[#707070] hover:text-[#FC6B57] transition-colors">
            Blog
          </Link>
          <Link to="/login" className="text-[#707070] hover:text-[#FC6B57] transition-colors">
            Log In
          </Link>
          <Link
            to="/get-started"
            className="bg-[#FC6B57] text-white px-4 py-2 rounded-full hover:bg-[#e55c48] transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden text-[#3A3A3A] z-50 relative">
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-white shadow-lg rounded-b-lg z-40 py-4 px-6 md:hidden transition-all duration-300 ease-in-out transform ${
          menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        <Link to="/" className="block py-2 text-[#707070] hover:text-[#FC6B57]" onClick={closeMenu}>
          Browse
        </Link>
        <Link to="/how-it-works" className="block py-2 text-[#707070] hover:text-[#FC6B57]" onClick={closeMenu}>
          How It Works
        </Link>
        <Link to="/blog" className="block py-2 text-[#707070] hover:text-[#FC6B57]" onClick={closeMenu}>
          Blog
        </Link>
        <Link to="/login" className="block py-2 text-[#707070] hover:text-[#FC6B57]" onClick={closeMenu}>
          Log In
        </Link>
        <Link
          to="/get-started"
          className="block mt-2 text-center bg-[#FC6B57] text-white py-2 rounded-full hover:bg-[#e55c48] transition-colors"
          onClick={closeMenu}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Nav;
