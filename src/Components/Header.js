import React from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h2 className="text-2xl font-bold"> <a href="/portfolio"> Larry Motuzis </a></h2>
            <Navbar />
          </div>
        </div>
      </header>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Header;
