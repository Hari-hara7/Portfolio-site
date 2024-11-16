// src/routes/About.tsx
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="bg-bg text-white p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, I'm [Your Name], a passionate web developer and technology enthusiast. 
          I specialize in building dynamic and user-friendly websites with cutting-edge technologies like React, TypeScript, and TailwindCSS.
        </p>

        <p className="text-lg leading-relaxed mt-6">
          My mission is to create websites that not only look great but also offer seamless user experiences.
          I love learning new technologies and applying them in real-world projects. 
          Outside of work, I enjoy [mention hobbies, interests, or anything personal].
        </p>

        <div className="mt-8 text-center">
          <a href="#contact" className="text-3bc2ca hover:text-8c5bdb transition-colors">
            Let's connect!
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
