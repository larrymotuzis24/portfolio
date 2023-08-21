import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h2 className="text-3xl font-bold tracking-wider">
            <Link to="/">ABN </Link>
          </h2>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.414 12l4.293 4.293a1 1 0 1 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 1 1 1.414-1.414L12 10.586l4.293-4.293a1 1 0 0 1 1.414 1.414L13.414 12z" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <Navigation isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
