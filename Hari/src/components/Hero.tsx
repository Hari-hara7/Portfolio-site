import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaEnvelope } from 'react-icons/fa';
import Hari1 from '../assets/Hari2.jpg';

const Hero: React.FC = () => {
  const [imageClicked, setImageClicked] = useState(false);

  const handleImageClick = () => {
    setImageClicked(!imageClicked); // Toggle between normal and black-and-white effect
  };

  return (
    <section className="bg-dark-900 text-white min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gradient"
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          <span className="text-gradient">Hariharanath</span> - B.Tech 2nd Year CSE Student
        </motion.h2>

        {/* Profile Image with Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 relative inline-block"
        >
          <motion.img
            src={Hari1}
            alt="Hariharanath"
            className={`w-48 h-48 rounded-lg cursor-pointer shadow-xl transition-all duration-300 transform ${
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
          className="text-lg md:text-xl mt-6 text-gray-300"
        >
          I am a passionate developer creating engaging and innovative web experiences.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 flex justify-center gap-6"
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg flex items-center gap-2 hover:scale-105 transition"
          >
            <FaCode /> See My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md bg-gray-800 border border-gray-600 text-white font-semibold shadow-lg flex items-center gap-2 hover:scale-105 transition"
          >
            <FaEnvelope /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
