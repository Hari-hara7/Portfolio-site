import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaEnvelope } from 'react-icons/fa';
import Hari1 from '../assets/Hari2.jpg';
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

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

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const columns = Math.floor(width / 20);
    const drops = Array(columns).fill(0);

    const characters = ['0', '1', 'A', 'B', 'C', 'D', '@', '#', '$', '%', '^', '&', '*', '-', '+', '!', ':', '>', '<'];
    const getRandomCharacter = () => characters[Math.floor(Math.random() * characters.length)];

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#0F0";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = getRandomCharacter();
        const speed = Math.random() * 2 + 2; // Random speed for different drops
        const xPos = i * 20;
        const yPos = drops[i] * 20;

        ctx.fillText(text, xPos, yPos);

        // Reset drop position randomly to simulate continuous falling
        if (yPos > height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i] += speed; // Increase drop position based on random speed
      }
    };

    const interval = setInterval(draw, 50);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
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
      <MatrixRain />
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

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg mt-3 text-gray-300 italic font-medium"
        >
          <span className="text-gradient font-semibold">Hariharanath</span> - B.Tech 2nd Year CSE Student
        </motion.h2>

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
              x: imageClicked ? [0, -10, 10, -10, 10, 0] : 0,
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            }}
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
