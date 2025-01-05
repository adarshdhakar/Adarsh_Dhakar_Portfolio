import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Me</h4>
            <p className="text-sm">
              Hi, I’m Adarsh Dhakar, a passionate software developer dedicated to creating impactful digital experiences. Let’s connect and build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-gray-200">About</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-gray-200">Projects</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-gray-200">Blog</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-gray-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/adarshdhakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/adarsh-dhakar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://twitter.com/AdarshDhakar_27" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://instagram.com/_dhakar_143_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://facebook.com/adarshdhakar.dhakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                <FaFacebook className="text-2xl" />
              </a>
            </div>
            <p className="text-sm">Feel free to connect with me on social media!</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} Adarsh Dhakar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
