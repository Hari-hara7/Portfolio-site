import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaMedium, FaTwitter, FaDiscord } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Logo from "../assets/logo.png";

const Footer: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
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
    <footer className="relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.4, 0.1, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Logo & Description */}
            <motion.div 
              variants={itemVariants}
              className="text-center md:text-left bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl border border-white/10 md:border-none"
            >
              <div className="flex justify-center md:justify-start mb-4">
                <motion.img 
                  src={Logo} 
                  alt="Logo" 
                  className="h-25 w-30 md:h-29 md:w-35 object-contain transition-transform duration-300 hover:scale-110 drop-shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-signature mb-3">
                Hariharanath
              </h1>
              <p className="text-gray-300 leading-relaxed">
                Building ideas, one line of code at a time. Let's innovate and grow together.
              </p>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div 
              variants={itemVariants}
              className="text-center bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl border border-white/10 md:border-none"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Quick Links
              </h2>
              <ul className="text-gray-300 space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Me', path: '/about' },
                  { name: 'Work', path: '/work' },
                  { name: 'Skills', path: '/skills' },
                  { name: 'Achievements', path: '/achievements' },
                  { name: 'Collaboration', path: '/collaboration' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Link 
                      to={link.path} 
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
           
            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="text-center md:text-right bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl border border-white/10 md:border-none"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Connect With Me
              </h2>
              <div className="flex justify-center md:justify-end gap-4 flex-wrap">
                {[
                  { icon: <FaTwitter />, href: "https://x.com/Hariharana70309?t=Ib05QY4zN8F41MsLHAix5Q&s=09", color: "hover:text-blue-400" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/hari-hara-nath-a13583282/", color: "hover:text-blue-600" },
                  { icon: <FaGithub />, href: "https://github.com/Hari-hara7", color: "hover:text-gray-400" },
                  { icon: <FaInstagram />, href: "https://instagram.com/hari_hara_nath77", color: "hover:text-pink-400" },
                  { icon: <FaMedium />, href: "https://medium.com/@hariharanath247", color: "hover:text-green-400" },
                  { icon: <FaDiscord />, href: "https://discord.gg/EVbcRNpP", color: "hover:text-purple-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-gray-300 ${social.color} transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-xl hover:scale-110 hover:shadow-lg`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/10 text-center"
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-gray-400 text-sm sm:text-base mb-2">
                &copy; {new Date().getFullYear()} K.B.Hariharanath. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Designed with{' '}
                <motion.span 
                  className="text-red-400 inline-block"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ❤️
                </motion.span>{' '}
                by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
                  Hari
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
