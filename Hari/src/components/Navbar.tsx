import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaTools,
  FaTrophy,
  FaHandshake,
  FaEnvelope,
  FaEdit,

  FaFolderOpen, // Portfolio Icon
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-black dark:bg-black shadow-md z-50 transition-all duration-300">
  <nav className="flex items-center justify-between p-4 md:px-6">
  <h1 className="text-3xl font-semibold text-transparent bg-clip-text text-gradient font-signature">
    Hariharanath
  </h1>

  <div className="flex items-center space-x-4">
    <button
      onClick={toggleSidebar}
      className="text-2xl p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition md:hidden"
    >
      {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
    </button>
  </div>

  <ul className="hidden md:flex flex-wrap gap-3 lg:gap-4">
    {[
      { name: 'Home', path: '/', icon: <FaHome /> },
      { name: 'About', path: '/about', icon: <FaUserAlt /> },
      { name: 'Work', path: '/work', icon: <FaBriefcase /> },
      { name: 'Skills', path: '/skills', icon: <FaTools /> },
      { name: 'Achievements', path: '/achievements', icon: <FaTrophy /> },
      { name: 'Collaboration', path: '/collaboration', icon: <FaHandshake /> },
      { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
      { name: 'Guestbook', path: '/guestbook', icon: <FaUserAlt /> },
      { name: 'Blogs', path: '/display', icon: <FaEdit /> }, // New Link
      { name: 'TechStack', path: '/PortfolioOverview', icon: <FaFolderOpen /> } // New Link
    ].map((item, index) => (
      <li key={index}>
        <Link
          to={item.path}
          className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm lg:text-base rounded-full shadow-md hover:scale-105 transition"
        >
          {item.icon} {item.name}
        </Link>
      </li>
    ))}
  </ul>
</nav>


      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-2/3 md:w-1/3 bg-gradient-to-b from-gray-800 via-gray-900 to-black z-50 shadow-lg"
      >
        <ul className="flex flex-col gap-6 text-white p-6 mt-10">
          {[{ name: 'Home', path: '/', icon: <FaHome /> },
            { name: 'About', path: '/about', icon: <FaUserAlt /> },
            { name: 'Work', path: '/work', icon: <FaBriefcase /> },
            { name: 'Skills', path: '/skills', icon: <FaTools /> },
            { name: 'Achievements', path: '/achievements', icon: <FaTrophy /> },
            { name: 'Collaboration', path: '/collaboration', icon: <FaHandshake /> },
            { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
            { name: 'Guestbook', path: '/guestbook', icon: <FaUserAlt /> },
            { name: 'Blogs', path: '/display', icon: <FaEdit /> }, 
           
            { name: 'TechStack', path: '/portfolioOverview', icon: <FaFolderOpen /> } // New Link
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-md hover:scale-105 transition"
                onClick={toggleSidebar}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
