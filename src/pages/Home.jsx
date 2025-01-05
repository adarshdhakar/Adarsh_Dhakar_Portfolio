import React from 'react';
import { Code, Database, GitBranch } from 'lucide-react';
import Swal from 'sweetalert2';
import { Card } from 'flowbite-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const handleGetInTouch = () => {
    Swal.fire({
      title: 'Thank you!',
      text: 'We will get back to you soon.',
      icon: 'success',
      confirmButtonText: 'Close'
    });
  };

  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="text-blue-600">Adarsh Dhakar</span>
          </h1>
          <p className="text-xl text-gray-700">
            A passionate <span className="font-semibold">Software Engineer</span> specializing in web development, 
            problem-solving, and creating user-friendly applications.
          </p>
          <div className="mt-6">
            <a
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg transition"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>

      <main className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Transforming Ideas Into Reality
          </h2>
          <p className="text-lg mb-8">
            I design and develop impactful solutions, ensuring high-quality results that meet client needs.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/projects"
              className="bg-indigo-700 hover:bg-indigo-800 text-white py-3 px-6 rounded-lg text-lg transition"
            >
              View My Projects
            </a>
            <a
              href="/contact"
              onClick={handleGetInTouch}
              className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg text-lg transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </main>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-8">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">Web Development</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Building responsive and visually appealing websites using modern frameworks and technologies.
              </p>
            </Card>
            <Card>
              <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">Backend Engineering</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Crafting robust and scalable server-side applications with a focus on performance and security.
              </p>
            </Card>
            <Card>
              <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">Problem Solving</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Tackling complex challenges with innovative solutions and a keen eye for detail.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
