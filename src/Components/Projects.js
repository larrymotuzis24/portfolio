import React from "react";
import testBrewDemo from "../Team-5-TestBrew.mov";
import CVGDemo from '../CVG-demo-2.mov';

const Projects = () => {
  const prevProjects = [
    { name: "Test Brew", to: "/", video: testBrewDemo },
    { name: "Source Code Books", to: "/" },
  ];

  const recentWork = [
    { name: "CVG Website", to: "/", video: CVGDemo },
  ];

  const recentWorkDisplay = recentWork.map((work) => {
    return (
      <div className="bg-blue-500 p-4 rounded-lg shadow-md mb-4 hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
        <p className="text-white font-bold mb-4">{work.name}</p>
        <video className="rounded-md" src={work.video} controls />
      </div>
    );
  });

  const prevProjectsDisplay = prevProjects.map((proj) => {
    return (
      <div className="bg-green-500 p-4 rounded-lg shadow-md mb-4 hover:bg-green-600 hover:shadow-lg transition-all duration-300">
        <p className="text-white font-bold mb-4">{proj.name}</p>
        {proj.video ? <video className="rounded-md" src={proj.video} controls /> : null }
        
      </div>
    );
  });

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Recent Work</h4>
            {recentWorkDisplay}
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Previous Projects</h4>
            {prevProjectsDisplay}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;