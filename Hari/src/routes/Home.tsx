
import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Collaboration from "../components/Collaboration";
import Contact from "../components/Contact";
import AboutRepository from "../components/AboutRepository";
import PerformanceDashboard from "../components/PerformanceDashboard";
import ArchitectureVisualization from "../components/ArchitectureVisualization";
import ScrollIndicator from "../components/ScrollIndicator";

const Home: React.FC = () => {
  return (
    <div className="bg-bg text-white">
      <ScrollIndicator />
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="hero"
      >
        <Hero />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        id="about"
      >
        <About />
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        id="work"
      >
        <Work />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        id="skills"
      >
        <Skills />
      </motion.div>
    
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        id="achievements"
      >
        <Achievements />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        id="collaboration"
      >
        <Collaboration />
      </motion.div>

      {/* Architecture Visualization Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Tech Architecture
          </motion.h2>
          <ArchitectureVisualization />
        </div>
      </motion.div>

      {/* Performance Dashboard */}
      <PerformanceDashboard />

      {/* About Repository Section */}
      <AboutRepository />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        id="contact"
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default Home;
