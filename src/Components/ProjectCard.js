import React, { useState } from "react";
import { FiCode } from "react-icons/fi";

const ProjectCard = ({ project, onProjectClick }) => {
  return (
    <div className="max-w-2xl pb-6">
      <div className="bg-green-500 p-4 rounded-lg shadow-md mb-4 hover:bg-green-600 hover:shadow-lg transition-all duration-300">
        <div className="flex-col items-center justify-between" >
          <div>
            <h4 className="text-white text-2xl font-semibold">
              <a href={project.to} target="_blank" rel="noreferrer" >
                {project.name}
              </a>
            </h4>
            <a href={project.to} target="_blank" rel="noreferrer">
              {project.to}
            </a>
            <div className="flex items-center mb-4 mt-4">
              <FiCode className="text-white text-xl mr-2" />
              <p className="text-white text-sm">Tech Stack: {project.techStack}</p>
            </div>
          </div>
          {project.video ? (
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={onProjectClick}
            >
              Watch Video
            </button>
          ) : null}
          <div >
            <p>
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
