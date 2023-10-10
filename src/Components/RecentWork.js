import React, { useState } from "react";
import { FiCode } from "react-icons/fi";
import VideoModal from "./VideoModal";
import CVGDemo from '../CVG-demo-2.mov';


export default function RecentWork() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleProjectClick = (work) => {
    setVideoUrl(work.video);
    setIsModalOpen(true);
  };


  const recentWork = [
    {
      name: "Cooper Valuation Group",
      to: "https://www.coopervaluationgroup.com/",
      techStack: "React, JavaScript, TailWind CSS",
      video: CVGDemo,
      description:
        "I collaborated with an appraisal group to develop a dynamic and user-friendly website that caters to their specific needs. The website serves as a comprehensive platform for the group, offering valuable features and functionalities to enhance their operations.",
    },
    {
      name: "Assist Basketball Network",
      to: "https://assistbasketballnetwork.com/",
      techStack: "WordPress",
      description:
        "Led a comprehensive engagement with ABN's ownership team to strategize and outline their vision for the upcoming remodel and relaunch of their website. Collaborated closely with the owner to understand their specific requirements and objectives. Leveraging in-depth discussions and insightful feedback, orchestrated the creation of a dynamic and modern website that seamlessly aligns with ABN's brand identity. The result of this collaborative effort is a freshly relaunched website that showcases ABN's offerings in an engaging and user-friendly manner, while also reflecting the company's values and aspirations.",
    },
  ];

  const recentWorkDisplay = recentWork.map((work) => {
    return (
      <div className="max-w-2xl pb-6" key={work.name}>
        <div className="bg-blue-500 p-4 rounded-lg shadow-md mb-4 hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
          <div className="flex-col items-center justify-between mb-4">
            <div>
              <a
                className="text-white text-2xl font-semibold"
                href={work.to}
                target="_blank"
                rel="noreferrer"
              >
                {work.name}
              </a>
                <a href={work.to} target="_blank" rel="noreferrer">
                  {" "}
                  {work.to}{" "}
                </a>
              <div className="flex items-center mt-2 mb-2">
                  <>
                    {" "}
                    <FiCode className="text-white text-xl mr-2" />{" "}
                    <p className="text-white text-sm">
                      Tech Stack: {work.techStack}{" "}
                    </p>{" "}
                  </>
               
                
              </div>
                  {work.video ? (
                <button
                  className="text-slate-700 hover:text-slate-900"
                  onClick={() => handleProjectClick(work)}
                >
                  Watch Video
                </button>
              ) : null}
              <div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white">{work.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
    {recentWorkDisplay}
    <VideoModal
      isOpen={isModalOpen}
      videoUrl={videoUrl}
      onClose={() => setIsModalOpen(false)}
    />
  </>
  )
}
