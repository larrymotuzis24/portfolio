import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', to: '/about' },
    { name: 'Camps', to: '/camps' },
    { name: 'Tours', to: '/tours' },
    // { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <div className="-mr-2 pr-2 flex sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={isOpen ? 'times' : 'bars'} />
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:space-x-4 mt-2 sm:mt-0`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            onClick={() => setIsOpen(false)} // Close the menu on link click
            className="text-white hover:text-blue-200 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
