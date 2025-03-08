import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaEnvelope } from 'react-icons/fa';
import Hari1 from '../assets/Hari2.jpg';
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import TrueFocus from './TrueFocus';
import TiltedCard from './TiltedCard';  // Importing TiltedCard

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const updatePosition = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        setPosition({ x: e.clientX, y: e.clientY });
      }

      if (e instanceof TouchEvent) {
        const touch = e.touches[0];
        if (touch) {
          setPosition({ x: touch.clientX, y: touch.clientY });
        }
      }
    };

    if (isDesktop) {
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('touchmove', updatePosition);
    }

    return () => {
      if (isDesktop) {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('touchmove', updatePosition);
      }
    };
  }, [isDesktop]);

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
        backgroundColor: 'cyan',
        boxShadow: isDesktop ? '0 0 25px 10px rgba(0, 255, 255, 0.8)' : 'none',
        transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease',
        cursor: 'none',
        mixBlendMode: 'difference',
      }}
      className="cursor-icon"
    />
  );
};

const Hero: React.FC = () => {
  const [imageClicked, setImageClicked] = useState(false);

  const handleImageClick = () => {
    setImageClicked(!imageClicked);
  };

  return (
    <section
      className="bg-dark-900 text-white min-h-screen flex items-center justify-center px-4 sm:px-6"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <CustomCursor />

      <div className="max-w-xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg mt-16"
        >
          Welcome to My Portfolio
        </motion.h1>

        <TrueFocus 
          sentence="True Focus Innovation Creativity"
          manualMode={false}
          blurAmount={8}
          borderColor="cyan"
          animationDuration={1.5}
          pauseBetweenAnimations={1}
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg mt-3 text-gray-300 italic font-medium"
        >
          <span className="text-gradient font-semibold">Hariharanath</span> - B.Tech 2nd Year CSE (Full Stack Development) Student
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 relative inline-block"
        ></motion.div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 flex justify-center"
        >
          <TiltedCard
  imageSrc={Hari1}
  altText="Hariharanath"
  captionText="Hariharanath"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
     Hariharanath
    </p>
  }
/>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm sm:text-base mt-4 text-gray-400 leading-relaxed"
        >
          I am a <span className="font-semibold text-white">dedicated</span> and{' '}
          <span className="font-semibold text-white">passionate developer</span>, building innovative web solutions.
        </motion.p>

        {/* Adding TiltedCard Component Here */}
        

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

      <Chatbot />
    </section>
  );
};

export default Hero;
