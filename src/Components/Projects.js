import React, { useState } from "react";
import { FiCode, FiBookOpen } from 'react-icons/fi';
import testBrewDemo from "../Team-5-TestBrew.mov";

const Projects = () => {
    const prevProjects = [
        {
            name: "Test Brew",
            to: "https://testbrew.herokuapp.com/",
            // video: testBrewDemo,
            techStack: 'React, JavaScript, Express, Webpack, Node.js, SQL, TailWind CSS, JSON Web Token',
            description: 'TestBrew is a platform that empowers developers to enhance their unit testing skills in just 15 minutes. By engaging in a series of exercises, users can learn to write more effective unit tests. TestBrew evaluates the unit tests written by users by utilizing the abstract syntax tree parsing capabilities of Acorn/Acorn-Walk. This analysis enables TestBrew to provide valuable suggestions and hints to users, helping them improve and rectify their unit tests. The frontend of TestBrew was created using Codemirror and React, ensuring a seamless and user-friendly interface. On the other hand, the backend was developed utilizing Node.js and Express, ensuring a robust and efficient foundation for the platform.'
        },
        {
            name: "TIC-TAC-TOE",
            to: "https://larrymotuzis24.github.io/tic-tac-toe/",
            techStack: 'React, JavaScript, TailWind CSS',
            description: 'Created a classic Tic-Tac-Toe game using Tic-Tac-Toe app using React.js. The app allows users to play the classic game against an AI opponent. It features an intuitive user interface, responsive design, and smooth gameplay experience. The app incorporates a range of technologies and concepts, including React hooks, Redux for state management, and the Minimax algorithm for the AI opponent. The Minimax algorithm ensures that the AI opponent makes optimal moves, providing a challenging experience for players.'
        }
    ];

    const recentWork = [
        {
        name: "Cooper Valuation Group",
        to: "https://www.coopervaluationgroup.com/",
        techStack:'React, JavaScript, TailWind CSS',
        // video: CVGDemo,
        description:'I collaborated with an appraisal group to develop a dynamic and user-friendly website that caters to their specific needs. The website serves as a comprehensive platform for the group, offering valuable features and functionalities to enhance their operations.'
        },
        {
            name: "Assist Basketball Network",
            to: "https://assistbasketballnetwork.com/",
            description:"Led a comprehensive engagement with ABN's ownership team to strategize and outline their vision for the upcoming remodel and relaunch of their website. Collaborated closely with the owner to understand their specific requirements and objectives. Leveraging in-depth discussions and insightful feedback, orchestrated the creation of a dynamic and modern website that seamlessly aligns with ABN's brand identity. The result of this collaborative effort is a freshly relaunched website that showcases ABN's offerings in an engaging and user-friendly manner, while also reflecting the company's values and aspirations."
            }
      ];

    const [showVideoModal, setShowVideoModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState('');

    const handleVideoClick = (videoSrc) => {
        setSelectedVideo(videoSrc);
        setShowVideoModal(true);
    };

    const recentWorkDisplay = recentWork.map((work) => {
        return (
            <div key={work.name} className="bg-blue-500 p-4 rounded-lg shadow-md mb-4 hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                <div className="flex-col items-center justify-between mb-4">
                    <div>
                        <a className="text-white text-2xl font-semibold" href={work.to} target="_blank" rel="noreferrer" >{work.name}</a>
                        <div className="flex items-center mt-2 mb-2">
                            
                           { work.techStack ?<> <FiCode className="text-white text-xl mr-2" /> <p className="text-white text-sm">Tech Stack: {work.techStack} </p>  </>  : null }
                        </div>
                           <div> 
                            <a href={work.to}> {work.to} </a>
                           </div>
                    </div>
                </div>
                <div>
                    <p className="text-white">{work.description}</p>
                </div>
            </div>
        );
    });

    const prevProjectsDisplay = prevProjects.map((proj) => {
        return (
            <div key={proj.name} className="bg-green-500 p-4 rounded-lg shadow-md mb-4 hover:bg-green-600 hover:shadow-lg transition-all duration-300">
                <div className="flex-col items-center justify-between mb-4">
                    <div>
                        <h4 className="text-white text-2xl font-semibold">{proj.name}</h4>
                        
                    </div>
                    <a href={proj.to}> Click here to check out this project! </a>

                </div>
                <div>
                    <p className="text-white">{proj.description}</p>
                </div>
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

            {/* Modal for displaying videos */}
            {showVideoModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 text-white text-xl font-bold cursor-pointer"
                            onClick={() => setShowVideoModal(false)}
                        >
                            X
                        </button>
                        <video className="rounded-md" src={selectedVideo} controls />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
