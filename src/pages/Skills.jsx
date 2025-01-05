import React from 'react';

const Skills = () => {
  const skills = {
    programmingLanguages: ['JAVA', 'C', 'C++'],
    frontEnd: ['HTML', 'CSS', 'JS', 'ReactJS', 'NextJS'],
    backEnd: ['NodeJS', 'ExpressJS', 'EJS', 'REST'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'MATLAB', 'Arduino'],
    frameworksLibraries: ['Bootstrap', 'Tailwind CSS'],
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Key Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
            <ul className="list-disc pl-6">
              {skills.programmingLanguages.map((skill, index) => (
                <li key={index} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Front-End</h2>
            <ul className="list-disc pl-6">
              {skills.frontEnd.map((skill, index) => (
                <li key={index} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Back-End</h2>
            <ul className="list-disc pl-6">
              {skills.backEnd.map((skill, index) => (
                <li key={index} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Databases</h2>
            <ul className="list-disc pl-6">
              {skills.databases.map((skill, index) => (
                <li key={index} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Tools</h2>
            <ul className="list-disc pl-6">
              {skills.tools.map((skill, index) => (
                <li key={index} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Frameworks/Libraries</h2>
            <ul className="list-disc pl-6">
              {skills.frameworkLibraries.map((skill, index) => (
                <li key={index} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
