import { ChipIcon, DatabaseIcon, CodeIcon, ServerIcon, DesktopComputerIcon, StarIcon } from "@heroicons/react/solid";
import React from "react";

export default function Skills() {
  const skills = [
    { name: "DataBase", icon: <DatabaseIcon className="text-green-500 w-6 h-6 mr-2" />, rating: 4 },
    { name: "Java", icon: <CodeIcon className="text-blue-500 w-6 h-6 mr-2" />, rating: 5 },
    { name: "React", icon: <ServerIcon className="text-red-500 w-6 h-6 mr-2" />, rating: 4 },
    { name: ".Net", icon: <DesktopComputerIcon className="text-yellow-500 w-6 h-6 mr-2" />, rating: 4 },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Services &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Brief description about your skills and technologies expertise.
          </p>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded flex p-4 h-full items-center">
                {skill.icon}
                <div className="flex flex-col flex-grow">
                  <span className="title-font font-medium text-white">
                    {skill.name}
                  </span>
                  <div className="flex mt-1">
                    {renderStars(skill.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
