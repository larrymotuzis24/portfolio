import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="-mr-2 flex sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={isOpen ? 'times' : 'bars'} />
        </button>
      </div>
      <div className={`hidden sm:flex sm:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
