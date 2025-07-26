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
  FaFolderOpen, 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState(0);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg z-50 transition-all duration-300">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
            transform: `translateX(${scrollY * 0.1}px)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.1, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full filter blur-2xl opacity-50 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full filter blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <nav className="relative z-10 flex items-center justify-between p-4 md:px-6">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-signature"
        >
          Hariharanath
        </motion.h1>

        <div className="flex items-center space-x-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSidebar}
            className="text-2xl p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 md:hidden"
          >
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </motion.button>
        </div>

        <motion.ul 
          className="hidden md:flex flex-wrap gap-3 lg:gap-4"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { name: 'Home', path: '/', icon: <FaHome /> },
            { name: 'About', path: '/about', icon: <FaUserAlt /> },
            { name: 'Work', path: '/work', icon: <FaBriefcase /> },
            { name: 'Skills', path: '/skills', icon: <FaTools /> },
            { name: 'Achievements', path: '/achievements', icon: <FaTrophy /> },
            { name: 'Collaboration', path: '/collaboration', icon: <FaHandshake /> },
            { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
            { name: 'Guestbook', path: '/guestbook', icon: <FaUserAlt /> },
            { name: 'Blogs', path: '/display', icon: <FaEdit /> },
            { name: 'TechStack', path: '/PortfolioOverview', icon: <FaFolderOpen /> }
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link
                to={item.path}
                className="group flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm lg:text-base rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>


      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 h-full w-2/3 md:w-1/3 bg-black/95 backdrop-blur-md border-r border-white/10 z-50 shadow-2xl"
      >
        {/* Sidebar Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
              backgroundSize: '20px 20px',
            }}
          />
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full filter blur-xl opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <motion.ul 
          className="relative z-10 bg-black flex flex-col gap-4 text-white p-6 mt-16"
          variants={menuVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        >
          {[
            { name: 'Home', path: '/', icon: <FaHome /> },
            { name: 'About', path: '/about', icon: <FaUserAlt /> },
            { name: 'Work', path: '/work', icon: <FaBriefcase /> },
            { name: 'Skills', path: '/skills', icon: <FaTools /> },
            { name: 'Achievements', path: '/achievements', icon: <FaTrophy /> },
            { name: 'Collaboration', path: '/collaboration', icon: <FaHandshake /> },
            { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
            { name: 'Guestbook', path: '/guestbook', icon: <FaUserAlt /> },
            { name: 'Blogs', path: '/display', icon: <FaEdit /> }, 
            { name: 'TechStack', path: '/portfolioOverview', icon: <FaFolderOpen /> }
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link
                to={item.path}
                className="group flex items-center gap-4 px-4 py-3 bg-black  backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                onClick={toggleSidebar}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
