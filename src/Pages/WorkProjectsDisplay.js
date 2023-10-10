import React from "react";
import RejectWork from "../Components/RecectWork";
import Projects from "../Components/Projects";

export default function WorkProjectsDisplayPage() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-12 text-center">
          {" "}
          Recent Work and Projects{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h4 className="text-2xl font-semibold mb-6 uppercase underline">
              {" "}
              Recent Work{" "}
            </h4>
            <RejectWork />
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6 uppercase underline">
              {" "}
              Projects{" "}
            </h4>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
