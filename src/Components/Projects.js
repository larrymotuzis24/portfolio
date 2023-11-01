import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import testBrewDemo from "../Team-5-TestBrew.mov";
import VideoModal from "./VideoModal";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleProjectClick = (proj) => {
    setVideoUrl(proj.video);
    setIsModalOpen(true);
  };

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

  
  return (
    <div className="flex flex-col">
      {prevProjects.map((proj, index) => (
        <ProjectCard
          key={index}
          project={proj}
          onProjectClick={() => handleProjectClick(proj)}
        />
      ))}
      <VideoModal
        isOpen={isModalOpen}
        videoUrl={videoUrl}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Projects;
