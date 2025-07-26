import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import Hari1 from '../assets/Hari2.jpg';
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import TrueFocus from './TrueFocus';
import TiltedCard from './TiltedCard';  

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

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

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    if (isDesktop) {
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('touchmove', updatePosition);
      document.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (isDesktop) {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('touchmove', updatePosition);
        document.removeEventListener('mouseover', handleMouseOver);
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
        width: isHoveringLink ? '80px' : '50px',
        height: isHoveringLink ? '80px' : '50px',
        borderRadius: '50%',
        background: isHoveringLink 
          ? 'radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(59,130,246,0.6) 100%)'
          : 'radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(6,182,212,0.4) 100%)',
        boxShadow: isDesktop 
          ? isHoveringLink 
            ? '0 0 40px 15px rgba(0, 255, 255, 0.4), 0 0 80px 25px rgba(59, 130, 246, 0.2)'
            : '0 0 25px 10px rgba(0, 255, 255, 0.3)'
          : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'none',
        mixBlendMode: 'screen',
        border: '2px solid rgba(0, 255, 255, 0.3)',
      }}
      className="cursor-icon"
    />
  );
};

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.6, 0.2, 0.6],
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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <CustomCursor />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8 mt-20">
            {/* Status Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
              Available for new opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron leading-tight"
                {...floatingAnimation}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Hi, I'm
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mt-2">
                  Hariharanath
                </span>
              </motion.h1>
            </motion.div>

            {/* Subtitle with Animation */}
            <motion.div variants={itemVariants}>
              <TrueFocus 
                sentence="Full Stack Developer"
                manualMode={false}
                blurAmount={8}
                borderColor="cyan"
                animationDuration={2}
                pauseBetweenAnimations={1.5}
              />
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              B.Tech 2nd Year CSE student passionate about creating{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                innovative web solutions
              </span>{' '}
              and turning ideas into reality through code.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 py-6"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/work"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <FaCode className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
                <HiSparkles className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:scale-105 hover:shadow-2xl"
              >
                <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Get in Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-6 pt-6"
            >
              <a 
                href="#"
                className="p-3 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-xl"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="#"
                className="p-3 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-xl"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="#"
                className="p-3 text-gray-400 hover:text-green-400 hover:scale-110 transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-xl"
              >
                <FaDownload size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-md opacity-75 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative">
                <TiltedCard
                  imageSrc={Hari1}
                  altText="Hariharanath"
                  captionText="Hariharanath"
                  containerHeight="400px"
                  containerWidth="350px"
                  imageHeight="400px"
                  imageWidth="350px"
                  rotateAmplitude={8}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="text-center">
                      <p className="font-bold text-xl text-white mb-2">Hariharanath</p>
                      <p className="text-cyan-400 text-sm">Full Stack Developer</p>
                    </div>
                  }
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-80"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-80"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <FaArrowDown className="animate-bounce" />
        </motion.div>
      </motion.div>

      <Chatbot />
    </section>
  );
};

export default Hero;
