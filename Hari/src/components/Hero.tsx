import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaEnvelope } from 'react-icons/fa';
import Hari1 from '../assets/Hari2.jpg';
import { Link } from "react-router-dom";

// Custom Cursor Component with Glowing Effect and Cyan Color
const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState<boolean>(true); // State to check if it's desktop

  // Detect screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Set to false if the screen width is less than 768px
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const updatePosition = (e: MouseEvent | TouchEvent) => {
      // For mouse event
      if (e instanceof MouseEvent) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
      // For touch event (mobile devices)
      if (e instanceof TouchEvent) {
        const touch = e.touches[0];
        if (touch) {
          setPosition({ x: touch.clientX, y: touch.clientY });
        }
      }
    };

    if (isDesktop) {
      // Mousemove event for desktop
      document.addEventListener('mousemove', updatePosition);
      // Touchmove event for mobile
      document.addEventListener('touchmove', updatePosition);
    }

    // Cleanup events on component unmount
    return () => {
      if (isDesktop) {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('touchmove', updatePosition);
      }
    };
  }, [isDesktop]);

  // Only render custom cursor if it's a desktop screen
  if (!isDesktop) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: `${position.y}px`,
        left: `${position.x}px`,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'cyan', // Cyan background color for the cursor
        boxShadow: isDesktop ? '0 0 25px 10px rgba(0, 255, 255, 0.8)' : 'none', // Glowing effect only on desktop
        transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease', // Smooth transition
        cursor: 'none', // Hide the default cursor
        mixBlendMode: 'difference',
      }}
      className="cursor-icon"
    />
  );
};

const Hero: React.FC = () => {
  const [imageClicked, setImageClicked] = useState(false);

  const handleImageClick = () => {
    setImageClicked(!imageClicked); // Toggle grayscale effect
  };

  return (
    <section
      className="bg-dark-900 text-white min-h-screen flex items-center justify-center px-4 sm:px-6"
      style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins font for a stylish look
    >
      {/* Custom Cursor */}
      <CustomCursor />

      <div className="max-w-xl text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg mt-16"
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Subheading with Professional Style */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg mt-3 text-gray-300 italic font-medium"
        >
          <span className="text-gradient font-semibold">Hariharanath</span> - B.Tech 2nd Year CSE Student
        </motion.h2>

        {/* Profile Image with Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 relative inline-block"
        >
          <motion.img
            src={Hari1}
            alt="Hariharanath"
            className={`w-40 h-40 sm:w-48 sm:h-48 rounded-lg cursor-pointer shadow-lg transition-all duration-300 transform ${
              imageClicked ? 'grayscale' : ''
            }`}
            onClick={handleImageClick}
            animate={{
              x: imageClicked ? [0, -10, 10, -10, 10, 0] : 0, // Shake animation
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            }}
          />
        </motion.div>

        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm sm:text-base mt-4 text-gray-400 leading-relaxed"
        >
          I am a <span className="font-semibold text-white">dedicated</span> and{' '}
          <span className="font-semibold text-white">passionate developer</span>, building innovative web solutions.
        </motion.p>

        {/* Call-to-Action Buttons with Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/work"
            className="w-full sm:w-auto px-4 py-3 rounded-md bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold tracking-wide shadow-md flex items-center justify-center gap-2 hover:scale-105 transition"
          >
            <FaCode /> View My Work
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-4 py-3 rounded-md bg-gray-800 border border-gray-600 text-white font-semibold tracking-wide shadow-md flex items-center justify-center gap-2 hover:scale-105 transition"
          >
            <FaEnvelope /> Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
