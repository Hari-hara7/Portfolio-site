import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiSparkles } from 'react-icons/hi';

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-black">
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

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
            Get to know me better! 👋
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron leading-tight mb-8"
              {...floatingAnimation}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                About Me
              </span>
            </motion.h2>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start text-left">
              
              <div className="space-y-6 bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl border border-white/10 md:border-none">
                <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron">
                  Who Am I?
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-Quattrocento">
                  I am a passionate developer with a love for creating innovative
                  and engaging web experiences. With a background in Web development, I specialize in building dynamic and responsive
                  applications using modern technologies.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed font-Quattrocento">
                  Outside of work, I enjoy exploring technology trends, playing games, or hiking.
                </p>
              </div>

              <div className="space-y-6 bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl border border-white/10 md:border-none">
                <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-orbitron">
                  What I Do
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed font-Quattrocento">
                  I focus on creating seamless user experiences through clean and
                  efficient code. My expertise includes:
                </p>
                <ul className="space-y-3 text-gray-300 font-Quattrocento">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✅</span>
                    <span className="text-lg">Responsive Web Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-3">✅</span>
                    <span className="text-lg">Frontend Development with React & TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✅</span>
                    <span className="text-lg">Animation using Framer Motion & GSAP</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✅</span>
                    <span className="text-lg">Building Scalable Applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <Link
              to="/about"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 backdrop-blur-sm"
            >
              Learn More
              <HiSparkles className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
