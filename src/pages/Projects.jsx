import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SaaSify | Software as a Service Intermediary',
      description: 'Developed a web application to manage software listings, enable users to add services to their cart, and carry out auctions.',
      keyFeatures: [
        'Software Listings',
        'Shopping Cart',
        'Checkout Process',
        'Auction Feature',
        'User Reviews',
      ],
      technologies: 'HTML, CSS, Bootstrap, JavaScript, NodeJS, EJS, MongoDB, Cloudinary, Render',
      link: 'https://your-app-link.com', // Replace with your actual deployed link
    },
    {
      title: 'ChitChat | Real Time AI-powered Chatting Website',
      description: 'Developed a real-time chatting website with group chat feature through room code and audio and video calls.',
      keyFeatures: [
        'Real Time Chatting',
        'Group Chat',
        'Audio and Video Calls',
        'AI Chatbot Assistance for User Support',
      ],
      technologies: 'HTML, CSS, NextJS, JavaScript, NodeJS, MongoDB, Cloudinary, Vercel',
      link: 'https://your-app-link.com', // Replace with your actual deployed link
    },
    {
      title: 'WanderLust | Accommodation Booking Website',
      description: 'Developed a full-stack web application for users to list, discover, and book accommodations worldwide.',
      keyFeatures: [
        'User Profiles',
        'Property Listings',
        'Booking System',
        'Reviews and Ratings',
        'User Support',
      ],
      technologies: 'HTML, CSS, Bootstrap, JavaScript, NodeJS, MongoDB',
      link: 'https://your-app-link.com', // Replace with your actual deployed link
    },
    {
      title: 'CPU Simulation | RISC-V Simulator',
      description: 'Simulates RISC-V assembly code to machine code and handles Data and Control Hazards.',
      keyFeatures: [
        'Hazard Handling',
        'Supports more than 30 types of instructions',
        'Supports Read/Write into the Cache',
      ],
      technologies: 'C++, OOPS, Encapsulation, Inheritance',
      link: 'https://github.com/your-repo-link', // Replace with your actual GitHub repo link
    },
    {
      title: 'Minesweeper | Arduino IDE Game',
      description: 'Implemented the classic Minesweeper game on Arduino IDE with a TFT display and joystick module.',
      keyFeatures: [
        'Classic Minesweeper Gameplay',
        'Uses Arduino board, TFT display, Joystick module',
      ],
      technologies: 'Arduino, TFT Display, Joystick Module, Adafruit_GFX, Adafruit_ST7735',
      link: 'https://github.com/your-repo-link', // Replace with your actual GitHub repo link
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>

        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 mb-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <h3 className="text-lg font-medium mb-2">Key Features:</h3>
            <ul className="list-disc pl-6 mb-4">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-lg font-medium mb-2">Technologies Used:</h3>
            <p className="mb-4">{project.technologies}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
