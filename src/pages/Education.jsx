import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      institution: 'Indian Institute of Technology, Bhubaneswar',
      degree: 'B.Tech in Computer Science and Engineering',
      duration: 'Nov. 2022 - Present',
      cgpa: 'CGPA: 9.22',
      percentage: '93.6%',
    },
    {
      institution: 'St. Paul’s School, Bhopal',
      degree: 'Senior School Certificate Examination, CBSE',
      duration: 'April 2020 - March 2022',
      percentage: '95%',
    },
    {
      institution: 'St. Paul’s School, Bhopal',
      degree: 'Secondary School Certificate Examination, CBSE',
      duration: 'April 2018 - March 2020',
      percentage: '95%',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Education</h1>

        {educationDetails.map((education, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 mb-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{education.institution}</h2>
            <p className="text-lg mb-2">{education.degree}</p>
            <p className="text-lg mb-2">{education.duration}</p>
            {education.cgpa && <p className="text-lg mb-2">{education.cgpa}</p>}
            {education.percentage && <p className="text-lg mb-2">{education.percentage}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
