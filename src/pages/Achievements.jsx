import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: 'JEE Advanced 2022',
      description: 'Rank 3852 among 1.5 lakh candidates',
    },
    {
      title: 'JEE Mains 2022',
      description: 'Rank 3127 among 9 lakh candidates',
    },
    {
      title: 'DSA Questions Solved',
      description: 'Solved 600+ DSA questions on different platforms',
    },
    {
      title: 'General Championship ’24',
      description: 'Won second prize in the General Championship’24 of our college',
    },
    {
      title: 'LeetCode',
      description: 'Solved 300+ DSA questions',
    },
    {
      title: 'GeeksforGeeks',
      description: 'Solved 200+ DSA questions',
    },
    {
      title: 'CodeForces',
      description: 'Max Rating 1271',
    },
    {
      title: 'CodeChef',
      description: 'Max Rating 1502',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Achievements</h1>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">{achievement.title}</h2>
              <p className="text-lg">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
