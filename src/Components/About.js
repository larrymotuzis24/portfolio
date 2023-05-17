import React, { useState, useEffect } from "react";
import profilePic from '../IMG_0210.JPG';

const About = () => {

  const aboutMe = `
    Hi, I'm Larry Motuzis, a passionate software developer who loves bringing ideas to life on the digital landscape. My journey into the realm of coding began in 2021 when a close friend showcased some of their impressive work, sparking an insatiable curiosity within me. Since then, I've immersed myself in the world of software development, constantly learning and evolving my skillset.

    I take pride in crafting engaging and interactive web applications, always aiming for the perfect balance between form and function. When I'm not writing lines of code or solving complex problems, you can find me exploring new technologies, tinkering with emerging tools, and staying up-to-date with industry trends to ensure I always deliver top-notch, innovative solutions.

    Through dedication and perseverance, I've honed my abilities in various programming languages and frameworks, constantly striving to push the boundaries of what's possible. I believe that software development is an ever-evolving art form, and I'm committed to growing alongside it. I have done work in software development, front-end/back-end web and database/server management.
  `;


  
  const introWords = ['Full Stack Developer', 'Problem Solver'];
  const [intro, setIntro] = useState('');
  const [animationClass, setAnimationClass] = useState('typing');

  useEffect(() => {
    let index = 0;

    const typeAndDelete = () => {
      setIntro(introWords[index]);
      setAnimationClass('typing');

      setTimeout(() => {
        setAnimationClass('deleting');
        setTimeout(() => {
          index = (index + 1) % introWords.length;
          typeAndDelete();
        }, 2000); // Deleting duration: 2 seconds
      }, 2000 + introWords[index].length * 200); // Typing duration: 200ms per letter + 2 seconds pause
    };

    typeAndDelete();
  }, []);



  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-12">About </h1>
      <h2 className={`typing-effect ${animationClass}`}>{intro}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6 col-span-2">
            <p className="text-lg leading-relaxed">{aboutMe}</p>
          </div>
          <div className="space-y-6 lg:mt-0">
            <img className="rounded-md shadow-md mb-6 w-full lg:w-3/4 mx-auto" src={profilePic} alt="profile" />
            <div className="bg-gray-800 p-6 rounded-md shadow-md w-full lg:w-3/4 mx-auto">
              <p className="text-xl font-semibold mb-4">Technologies I've been working with recently:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>Redux-Toolkit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;