import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaHome, FaUserAlt, FaBriefcase, FaTools, FaTrophy, FaHandshake, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Toggle sidebar state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark/light theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark theme based on state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-bg dark:bg-dark shadow-md z-50 transition-all duration-300">
      <nav className="flex items-center justify-between p-4 md:px-8">
        <h1 className="text-2xl font-bold text-gradient">Hariharanath</h1>
        <div className="flex items-center space-x-4">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-white text-2xl md:hidden focus:outline-none"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl md:hidden focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-400 transition-all ease-in-out duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400 transition-all ease-in-out duration-300">About</Link>
          </li>
          <li>
            <Link to="/work" className="hover:text-gray-400 transition-all ease-in-out duration-300">Work</Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-gray-400 transition-all ease-in-out duration-300">Skills</Link>
          </li>
          <li>
            <Link to="/achievements" className="hover:text-gray-400 transition-all ease-in-out duration-300">Achievements</Link>
          </li>
          <li>
            <Link to="/collaboration" className="hover:text-gray-400 transition-all ease-in-out duration-300">Collaboration</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition-all ease-in-out duration-300">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-2/3 md:w-1/3 bg-gray-800 z-50 shadow-lg"
      >
        <ul className="flex flex-col gap-6 text-white p-6 mt-10">
          <li>
            <Link
              to="/"
              className="flex items-center gap-4 hover:text-gray-400 transition-all ease-in-out duration-300"
              onClick={toggleSidebar}
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-4 hover:text-gray-400 transition-all ease-in-out duration-300"
              onClick={toggleSidebar}
            >
              <FaUserAlt /> About
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className="flex items-center gap-4 hover:text-gray-400 transition-all ease-in-out duration-300"
              onClick={toggleSidebar}
            >
              <FaBriefcase /> Work
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="flex items-center gap-4 hover:text-gray-400 transition-all ease-in-out duration-300"
              onClick={toggleSidebar}
            >
              <FaTools /> Skills
            </Link>
          </li>
          <li>
            <Link
              to="/achievements"
              className="flex items-center gap-4 hover:text-gray-400 transition-all ease-in-out duration-300"
              onClick={toggleSidebar}
            >
              <FaTrophy /> Achievements
            </Link>
          </li>
          <li>
            <Link
              to="/collaboration"
              className="flex items-center gap-4 hover:text-gray-400 transition-all ease-in-out duration-300"
              onClick={toggleSidebar}
            >
              <FaHandshake /> Collaboration
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-4 hover:text-gray-400 transition-all ease-in-out duration-300"
              onClick={toggleSidebar}
            >
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
