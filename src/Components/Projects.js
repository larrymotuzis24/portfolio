import React from "react";
import { FiCode, FiBookOpen } from 'react-icons/fi';
import testBrewDemo from "../Team-5-TestBrew.mov";
import CVGDemo from '../CVG-demo-2.mov';

const Projects = () => {
const prevProjects = [
{
name: "Test Brew",
to: "/",
video: testBrewDemo,
description:'TestBrew is a platform that empowers developers to enhance their unit testing skills in just 15 minutes. By engaging in a series of exercises, users can learn to write more effective unit tests. TestBrew evaluates the unit tests written by users by utilizing the abstract syntax tree parsing capabilities of Acorn/Acorn-Walk. This analysis enables TestBrew to provide valuable suggestions and hints to users, helping them improve and rectify their unit tests. The frontend of TestBrew was created using Codemirror and React, ensuring a seamless and user-friendly interface. On the other hand, the backend was developed utilizing Node.js and Express, ensuring a robust and efficient foundation for the platform.'
},
{
name: "Source Code Books",
to: "/",
description:'The e-commerce application offers a seamless platform for consumers to effortlessly purchase books. With the ability to search and filter books by category, users can easily find their desired titles. Furthermore, they can conveniently add books to their cart and wish list, proceed to checkout, and review their orders. To enhance the overall experience, customers receive email notifications once their orders have been successfully placed. On the administrative side, the application equips administrators with efficient product and user management functionalities, allowing them to effectively oversee and manage the platform operations. Tech Stack: The application is built using a robust tech stack, including React for the frontend, Node.js and Express for the backend, PotgreSQL for the database, and Node Mailer for email notifications.'
},
];

const recentWork = [
{
name: "CVG Website",
to: "/",
video: CVGDemo,
description:'I collaborated with an appraisal group to develop a dynamic and user-friendly website that caters to their specific needs. The website serves as a comprehensive platform for the group, offering valuable features and functionalities to enhance their operations.'
},
];

const recentWorkDisplay = recentWork.map((work) => {
    return (
      <div key={work.name} className="bg-blue-500 p-4 rounded-lg shadow-md mb-4 hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
        <div className="flex-col items-center justify-between mb-4">
          <div>
            <h4 className="text-white text-2xl font-semibold">{work.name}</h4>
            <div className="flex items-center mt-2 mb-2">
              <FiCode className="text-white text-xl mr-2" />
              <p className="text-white text-sm">Tech Stack: React, Node.js, Express</p>
            </div>
          </div>
          <div>
            <video className="rounded-md" src={work.video} controls />
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
      <div key={proj.name } className="bg-green-500 p-4 rounded-lg shadow-md mb-4 hover:bg-green-600 hover:shadow-lg transition-all duration-300">
        <div className="flex-col items-center justify-between mb-4">
          <div>
            <h4 className="text-white text-2xl font-semibold">{proj.name}</h4>
            <div className="flex items-center mt-2 mb-2">
              {proj.video ? <FiCode className="text-white text-xl mr-2" /> : <FiBookOpen className="text-white text-xl mr-2" />}
              <p className="text-white text-sm">Tech Stack: React, Node.js, Express</p>
            </div>
          </div>
          <div>
            {proj.video ? <video className="rounded-md" src={proj.video} controls /> : null}
          </div>
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
</div>
);
};

export default Projects;