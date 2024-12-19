import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TerminalAnimation: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const terminalText = [
    "$Hari >> Welcome to Hariharanath's Portfolio...",
    "$Hari >> Initializing... ██████████",
    "$Hari >> Fetching data from the server... ⌛",
    "$Hari >> Almost there...  █▓▒▒▒▒▒▒▒▒▒▓█",
    "$Hari >> Loading complete. Redirecting... >>>",
    "$Hari >> ██████████ Portfolio Loaded ██████████"
  ];
  
  

  useEffect(() => {
    if (textIndex < terminalText.length) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 2000); // Change text every 2 seconds
      return () => clearTimeout(timer); // Cleanup on unmount or textIndex change
    }
  }, [textIndex]);

  return (
    <>
      <div className="terminal-container">
        <motion.div
          className="terminal-window"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="terminal-header">Code your dreams into reality!</div>
          <div className="terminal-content">
            {terminalText.slice(0, textIndex).map((line, index) => (
              <div key={index} className="terminal-line">
                <span>{line}</span>
              </div>
            ))}
            {/* Blinking cursor */}
            <div className="terminal-line">
              <span className="blinking-cursor">_</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Styles */}
      <style>{`
        /* General Styles */
        .terminal-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Full height */
          width: 100%;
          background-color: black;
          border: 2px solid cyan; /* Cyan border */
          border-radius: 10px;
          padding: 20px;
          font-family: 'Courier New', Courier, monospace;
          color: cyan; /* Cyan text color */
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* Cyan glowing effect */
          overflow: hidden;
        }

        .terminal-window {
          width: 100%;
          padding: 20px;
          background-color: #000;
          color: cyan; /* Cyan text color */
          font-family: 'Courier New', Courier, monospace;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
          animation: fadeIn 2s ease-in-out;
          overflow-y: auto;
        }

        .terminal-header {
          font-size: 18px;
          font-weight: bold;
          color: cyan; /* Cyan header text */
          margin-bottom: 10px;
        }

        .terminal-content {
          font-size: 16px;
          line-height: 1.5;
        }

        .terminal-line {
          margin: 5px 0;
        }

        .blinking-cursor {
          display: inline-block;
          width: 10px;
          background-color: cyan; /* Cyan cursor */
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            background-color: transparent;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .terminal-container {
            padding: 15px;
          }

          .terminal-window {
            padding: 15px;
          }

          .terminal-header {
            font-size: 16px;
          }

          .terminal-content {
            font-size: 14px;
          }

          .terminal-line {
            margin: 3px 0;
          }
        }
      `}</style>
    </>
  );
};

export default TerminalAnimation;
