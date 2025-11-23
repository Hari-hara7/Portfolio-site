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
  FaBook,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrollY(offset);
      setIsScrolled(offset > 50);
    };
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

  useEffect(() => {
    // Close sidebar when route changes
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome />, color: 'from-blue-400 to-cyan-400' },
    { name: 'About', path: '/about', icon: <FaUserAlt />, color: 'from-purple-400 to-pink-400' },
    { name: 'Work', path: '/work', icon: <FaBriefcase />, color: 'from-green-400 to-emerald-400' },
    { name: 'Skills', path: '/skills', icon: <FaTools />, color: 'from-orange-400 to-yellow-400' },
    { name: 'Achievements', path: '/achievements', icon: <FaTrophy />, color: 'from-yellow-400 to-amber-400' },
    { name: 'Collaboration', path: '/collaboration', icon: <FaHandshake />, color: 'from-teal-400 to-cyan-400' },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope />, color: 'from-red-400 to-pink-400' },
    { name: 'Guestbook', path: '/guestbook', icon: <FaBook />, color: 'from-indigo-400 to-purple-400' },
    { name: 'Blogs', path: '/display', icon: <FaEdit />, color: 'from-cyan-400 to-blue-400' },
    { name: 'TechStack', path: '/PortfolioOverview', icon: <FaFolderOpen />, color: 'from-violet-400 to-fuchsia-400' }
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-500/5' 
            : 'bg-black/60 backdrop-blur-md border-b border-white/5'
        }`}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.8) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              transform: `translateX(${scrollY * 0.05}px) translateY(${scrollY * 0.02}px)`
            }}
          />
          
          {/* Gradient Line */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Floating Orbs */}
          <motion.div 
            className="absolute top-0 left-1/4 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <nav className="relative z-10 max-w-[1800px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <motion.div
             
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <HiSparkles className="relative text-2xl sm:text-3xl text-cyan-400" />
              </motion.div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-signature">
                  Hariharanath
                </span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <motion.ul 
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link to={item.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl text-sm xl:text-base transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {/* Background on hover */}
                    {!isActive(item.path) && (
                      <motion.div
                        className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    
                    {/* Content */}
                    <motion.span 
                      className="relative z-10 text-lg"
                      animate={isActive(item.path) ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="relative z-10 font-medium whitespace-nowrap">
                      {item.name}
                    </span>

                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r rounded-xl -z-10"
                        style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSidebar}
            className="relative group lg:hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 p-2.5 sm:p-3 rounded-xl shadow-lg">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="text-white text-xl sm:text-2xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="text-white text-xl sm:text-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </nav>
      </motion.header>



      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 shadow-2xl lg:hidden overflow-y-auto"
          >
            {/* Sidebar Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.8) 1px, transparent 0)`,
                  backgroundSize: '30px 30px',
                }}
              />
              
              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0.3, 0.1, 0.3],
                    scale: [1, 1.8, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Gradient Orbs */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full filter blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>

            {/* Sidebar Header */}
            <div className="relative z-10 p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-50" />
                    <HiSparkles className="relative text-3xl text-cyan-400" />
                  </div>
                  <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Menu
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleSidebar}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>
              <p className="text-sm text-gray-400">Navigate through my portfolio</p>
            </div>

            {/* Sidebar Menu */}
            <motion.ul 
              className="relative z-10 flex flex-col gap-2 p-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link to={item.path} onClick={toggleSidebar}>
                    <motion.div
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                        isActive(item.path)
                          ? `bg-gradient-to-r ${item.color} text-white shadow-lg shadow-cyan-500/20`
                          : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <motion.span 
                        className="text-xl"
                        animate={isActive(item.path) ? { rotate: [0, -10, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="font-medium text-base">{item.name}</span>
                      
                      {/* Active indicator */}
                      {isActive(item.path) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-white rounded-full"
                        />
                      )}

                      {/* Arrow on hover */}
                      {!isActive(item.path) && (
                        <motion.span 
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                      )}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Sidebar Footer */}
            <div className="relative z-10 mt-auto p-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-xs text-gray-500">Crafted with ❤️ by</p>
                <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Hariharanath
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
