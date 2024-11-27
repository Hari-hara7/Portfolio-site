import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaMedium, FaTwitter, FaDiscord } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo and Description */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text text-gradient font-signature">
            Hariharanath
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Building ideas, one line of code at a time. Let's innovate and grow together.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
          <li>
            <Link to="/" className="hover:text-white transition">
                Home
           </Link>

            </li>
            <li>
            <Link to="/about" className="hover:text-white transition">
                 About Me
           </Link>

            </li>
            <li>
            <Link to="/work" className="hover:text-white transition">
                 Work
           </Link>

            </li>
            <li>
            <Link to="/skills" className="hover:text-white transition">
            Skills
           </Link>

            </li>
            <li>
            <Link to="/achievements" className="hover:text-white transition">
            Achievements
           </Link>
            </li>
            <li>
            <Link to="/collaboration" className="hover:text-white transition">
            Collaboration
           </Link>
            </li>
            <li>
            <Link to="/contact" className="hover:text-white transition">
            Contact
           </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div className="text-center md:text-right">
          <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://x.com/Hariharana70309?t=Ib05QY4zN8F41MsLHAix5Q&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/hari-hara-nath-a13583282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Hari-hara7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/hari_hara_nath77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://medium.com/@hariharanath247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaMedium />
            </a>
            <a
              href="https://discord.gg/EVbcRNpP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaDiscord />
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
