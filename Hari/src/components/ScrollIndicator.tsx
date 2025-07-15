import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaChevronUp, FaHome, FaUser, FaBriefcase, FaCog, FaTrophy, FaHandshake, FaEnvelope } from 'react-icons/fa';

const ScrollIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'hero', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'work', label: 'Work', icon: <FaBriefcase /> },
    { id: 'skills', label: 'Skills', icon: <FaCog /> },
    { id: 'achievements', label: 'Achievements', icon: <FaTrophy /> },
    { id: 'collaboration', label: 'Collaboration', icon: <FaHandshake /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show scroll to top button
      setShowScrollTop(scrollPosition > windowHeight * 0.5);

      // Determine active section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      let currentSection = 'hero';
      sectionElements.forEach(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= 0) {
            currentSection = element.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Section Navigation */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/20">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`block w-12 h-12 rounded-xl mb-2 last:mb-0 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center h-full text-lg">
                {section.icon}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active section label */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="absolute right-16 top-0 bg-gray-900/90 backdrop-blur-lg rounded-lg px-3 py-2 border border-gray-700"
        >
          <div className="text-sm font-medium text-white whitespace-nowrap">
            {sections.find(s => s.id === activeSection)?.label}
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900/90 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: showScrollTop ? 1 : 0, 
          opacity: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 z-40"
      >
        <FaChevronUp className="text-xl" />
      </motion.button>

      {/* Mobile Section Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20 flex space-x-1">
          {sections.slice(0, 5).map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-xl transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center h-full text-sm">
                {section.icon}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Scroll Percentage Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 left-8 z-40 hidden md:block"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 border border-white/20 flex items-center justify-center">
          <div className="text-sm font-bold text-cyan-400">
            {Math.round(scrollYProgress.get() * 100)}%
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ScrollIndicator;