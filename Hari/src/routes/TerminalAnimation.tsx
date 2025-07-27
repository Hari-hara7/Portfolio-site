import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalAnimation: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const terminalText = [
    { 
      text: "Welcome to Hariharanath's Portfolio", 
      type: "info",
      delay: 1000
    },
    { 
      text: "Initializing development environment...", 
      type: "process",
      delay: 1500
    },
    { 
      text: "Loading projects ████████████ 100%", 
      type: "loading",
      delay: 2000
    },
    { 
      text: "Fetching skills database... ⚡", 
      type: "process",
      delay: 1500
    },
    { 
      text: "Connecting to achievements server...", 
      type: "process",
      delay: 1500
    },
    { 
      text: "✅ All systems operational!", 
      type: "success",
      delay: 1000
    },
    { 
      text: "Ready to showcase my work 🚀", 
      type: "ready",
      delay: 2000
    }
  ];

  useEffect(() => {
    if (textIndex < terminalText.length) {
      const currentLine = terminalText[textIndex];
      setIsTyping(true);
      
      // Typing animation
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.text.length) {
          setCurrentText(currentLine.text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          
          // Move to next line after delay
          setTimeout(() => {
            setTextIndex(textIndex + 1);
            setCurrentText('');
          }, currentLine.delay);
        }
      }, 50); // Typing speed

      return () => clearInterval(typeInterval);
    }
  }, [textIndex]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'info': return 'text-cyan-400';
      case 'process': return 'text-yellow-400';
      case 'loading': return 'text-blue-400';
      case 'success': return 'text-green-400';
      case 'ready': return 'text-purple-400';
      default: return 'text-gray-300';
    }
  };

  const getLinePrefix = (type: string) => {
    switch (type) {
      case 'info': return '❯';
      case 'process': return '⚙️';
      case 'loading': return '⏳';
      case 'success': return '✅';
      case 'ready': return '🚀';
      default: return '$';
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px sm:50px 50px',
          }}
        />
        
        {/* Floating Particles - Reduced for mobile */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 sm:opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs - Smaller for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/5 sm:bg-cyan-500/10 rounded-full filter blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/5 sm:bg-blue-500/10 rounded-full filter blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative w-full max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto"
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-xl sm:rounded-t-2xl p-2 sm:p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4 font-mono">terminal</span>
            </div>
            <div className="text-gray-400 text-xs font-mono hidden sm:block">
              Hariharanath@portfolio:~$
            </div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-black/95 backdrop-blur-sm rounded-b-xl sm:rounded-b-2xl p-3 sm:p-6 border border-cyan-500/20 shadow-2xl min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-4 sm:mb-6"
          >
            <div className="flex flex-col items-center w-full max-w-xs sm:max-w-md mx-auto">
              <div className="text-cyan-400 font-mono text-xs xs:text-sm sm:text-lg lg:text-xl mb-0.5 sm:mb-2 text-center break-words w-full">
                <span className="block"></span>
                <span className="block"> Welcome to</span>
                <span className="block"> Hariharanath's Portfolio  </span>
                <span className="block"></span>
              </div>
            </div>
          </motion.div>

          {/* Terminal Content */}
          <div className="space-y-2 sm:space-y-3">
            {terminalText.slice(0, textIndex).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-2 sm:space-x-3"
              >
                <span className="text-cyan-400 font-mono text-xs sm:text-sm lg:text-base flex-shrink-0">
                  {getLinePrefix(line.type)}
                </span>
                <span className={`font-mono text-xs sm:text-sm lg:text-base ${getLineColor(line.type)} break-words flex-1`}>
                  {line.text}
                </span>
              </motion.div>
            ))}

            {/* Current Typing Line */}
            {textIndex < terminalText.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start space-x-2 sm:space-x-3"
              >
                <span className="text-cyan-400 font-mono text-xs sm:text-sm lg:text-base flex-shrink-0">
                  {getLinePrefix(terminalText[textIndex]?.type || 'default')}
                </span>
                <span className={`font-mono text-xs sm:text-sm lg:text-base ${getLineColor(terminalText[textIndex]?.type || 'default')} break-words flex-1`}>
                  {currentText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 sm:w-2 h-3 sm:h-4 bg-cyan-400 ml-1"
                    />
                  )}
                </span>
              </motion.div>
            )}

            {/* Command Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: textIndex >= terminalText.length ? 1 : 0.3 }}
              transition={{ delay: 1 }}
              className="flex items-center space-x-1 sm:space-x-2 mt-4 sm:mt-8"
            >
              <span className="text-green-400 font-mono text-xs sm:text-sm lg:text-base font-bold">
                hari@portfolio:~$
              </span>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1 sm:w-2 h-3 sm:h-4 bg-green-400"
              />
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: textIndex >= terminalText.length ? 1 : 0 }}
            transition={{ delay: 2 }}
            className="mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700"
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="bg-gray-800/50 rounded-lg p-2 sm:p-4">
                <div className="text-cyan-400 font-mono text-sm sm:text-lg font-bold">15+</div>
                <div className="text-gray-400 font-mono text-xs">Projects</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-2 sm:p-4">
                <div className="text-green-400 font-mono text-sm sm:text-lg font-bold">2+</div>
                <div className="text-gray-400 font-mono text-xs">Years</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-2 sm:p-4">
                <div className="text-purple-400 font-mono text-sm sm:text-lg font-bold">∞</div>
                <div className="text-gray-400 font-mono text-xs">Ideas</div>
              </div>
            </div>
          </motion.div>

          {/* Enter Portfolio Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: textIndex >= terminalText.length ? 1 : 0,
              scale: textIndex >= terminalText.length ? 1 : 0.8
            }}
            transition={{ delay: 3, type: "spring", stiffness: 200 }}
            className="mt-4 sm:mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-mono font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg sm:rounded-xl border border-cyan-400/30 shadow-lg transition-all duration-300 text-sm sm:text-base"
              onClick={() => window.location.href = '/'}
            >
              <span className="flex items-center justify-center space-x-1 sm:space-x-2">
                <span>Enter Portfolio</span>
                <span className="text-sm sm:text-lg">→</span>
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-cyan-500/30 pointer-events-none">
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 blur-xl"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default TerminalAnimation;