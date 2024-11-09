"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white shadow-lg">
      <div className="container mx-auto text-center py-8 flex justify-between items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`md:flex items-center mx-auto space-x-4 md:space-x-8 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link
            href="/"
            className="text-sm md:text-base lg:text-lg hover:text-indigo-400"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-sm md:text-base lg:text-lg hover:text-indigo-400"
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className="text-sm md:text-base lg:text-lg hover:text-indigo-400"
          >
            SERVICES
          </Link>
          <Link
            href="/portfolio"
            className="text-sm md:text-base lg:text-lg hover:text-indigo-400"
          >
            PORTFOLIO
          </Link>
          <Link
            href="/skill"
            className="text-sm md:text-base lg:text-lg hover:text-indigo-400"
          >
            SKILL
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
