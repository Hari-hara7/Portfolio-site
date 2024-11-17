import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaMedium, FaTwitter } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo and Description */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gradient">Hari</h1>
          <p className="mt-2 text-sm text-gray-400">
            Building ideas, one line of code at a time. Let's innovate and grow together.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-white transition">
              Work
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#achievements" className="hover:text-white transition">
              Achievements
              </a>
            </li>
            <li>
              <a href="#collaboration" className="hover:text-white transition">
              Collaboration
              </a>
            </li>

          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div className="text-center md:text-right">
          <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://x.com"
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
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaMedium />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Additional Info */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <p>
          Designed with ❤️ by{' '}
          <a
            href="#"
            className="text-white hover:text-yellow-400 transition"
          >
            Hari
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
