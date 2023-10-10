import React from "react";
import { FiCode } from "react-icons/fi";
import testBrewDemo from "../Team-5-TestBrew.mov";

const Projects = () => {
  const prevProjects = [
    {
      name: "Test Brew",
      to: "https://testbrew.herokuapp.com/",
      video: testBrewDemo,
      techStack:
        "React, JavaScript, Express, Webpack, Node.js, SQL, TailWind CSS, JSON Web Token",
      description:
        "TestBrew is a platform that empowers developers to enhance their unit testing skills in just 15 minutes. By engaging in a series of exercises, users can learn to write more effective unit tests. TestBrew evaluates the unit tests written by users by utilizing the abstract syntax tree parsing capabilities of Acorn/Acorn-Walk. This analysis enables TestBrew to provide valuable suggestions and hints to users, helping them improve and rectify their unit tests. The frontend of TestBrew was created using Codemirror and React, ensuring a seamless and user-friendly interface. On the other hand, the backend was developed utilizing Node.js and Express, ensuring a robust and efficient foundation for the platform.",
    },
    {
      name: "TIC-TAC-TOE",
      to: "https://larrymotuzis24.github.io/tic-tac-toe/",
      techStack: "React, JavaScript, TailWind CSS",
      description:
        "Created a classic Tic-Tac-Toe game using Tic-Tac-Toe app using React.js. The app allows users to play the classic game against an AI opponent. It features an intuitive user interface, responsive design, and smooth gameplay experience. The app incorporates a range of technologies and concepts, including React hooks, Redux for state management, and the Minimax algorithm for the AI opponent. The Minimax algorithm ensures that the AI opponent makes optimal moves, providing a challenging experience for players.",
    },
  ];

  const prevProjectsDisplay = prevProjects.map((proj) => {
    return (
      <div className="max-w-2xl pb-6" key={proj.name}>
        <div className="bg-green-500 p-4 rounded-lg shadow-md mb-4 hover:bg-green-600 hover:shadow-lg transition-all duration-300">
          <div className="flex-col items-center justify-between mb-4">
            <div>
              <h4 className="text-white text-2xl font-semibold">
                {" "}
                <a href={proj.to} target="_blank" rel="noreferrer">
                  {" "}
                  {proj.name}{" "}
                </a>{" "}
              </h4>
              {proj.techStack ? (
                <div className="flex items-center mb-4 ">
                  <FiCode className="text-white text-xl mr-2" />
                  <p className="text-white text-sm">
                    Tech Stack: {proj.techStack}
                  </p>
                </div>
              ) : null}
            </div>
            <a href={proj.to} target="_blank" rel="noreferrer">
              {" "}
              Click here to check out this project!{" "}
            </a>
          </div>
          <div className="flex items-center mt-2 mb-2"></div>
          <div>
            <p className="text-white">{proj.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return prevProjectsDisplay;
};

export default Projects;
