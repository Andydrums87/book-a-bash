import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
      <div className="flex items-center">
        <div className="flex items-center">
          <svg
            width="40"
            height="48"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M50 10C30 10 20 30 20 50C20 70 30 90 50 90C70 90 80 70 80 50C80 30 70 10 50 10Z"
              fill="#FC6B57"
            />
            <path d="M35 30C35 30 40 40 40 50C40 60 35 70 35 70" stroke="white" strokeWidth="5" />
            <path d="M50 90L45 120" stroke="#FC6B57" strokeWidth="2" />
            <path d="M75 15L85 5" stroke="#FC6B57" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="text-[#FC6B57] text-2xl font-bold">BookABash</span>
        </div>
      </div>
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
      <button className="md:hidden text-[#3A3A3A]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;



