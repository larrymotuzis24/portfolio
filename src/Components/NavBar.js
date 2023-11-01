import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", target: "/" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];



  return (
    <>
      <div className="-mr-2 pr-2 flex sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={isOpen ? "times" : "bars"} />
        </button>
      </div>
      <div
        className={`hidden:sm:block sm:flex sm:space-x-4 ${isOpen ? "block" : "hidden"}`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.target}
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};


export default Navbar;
