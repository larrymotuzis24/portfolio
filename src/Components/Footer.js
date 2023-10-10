import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Larry Motuzis. All rights reserved.
        </p>
        <div className="space-x-4 mt-4">
            <a
            href="https://www.linkedin.com/in/larry-motuzis/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
            >
            LinkedIn
            </a>
            <a
            href="https://twitter.com/larry_motuzis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
            >
            Twitter
            </a>

        </div>
        
      </div>
    </footer>
  );
};
