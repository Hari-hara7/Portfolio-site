import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Logo and Description */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gradient">MyPortfolio</h1>
          <p className="mt-2 text-sm text-gray-400">
            Building ideas, one line of code at a time.
          </p>
        </div>

        {/* Center Section - Social Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Right Section - Copyright */}
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
