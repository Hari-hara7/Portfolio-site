import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-bg text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          About Me
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          Get to know me better! 👋
        </motion.p>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-left"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-semibold text-gradient">
                Who Am I? 
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                I am a passionate developer with a love for creating innovative
                and engaging web experiences. With a background in Web development, I specialize in building dynamic and responsive
                applications using modern technologies.
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Outside of work, I enjoy  exploring
                technology trends, playing games, or hiking.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-semibold text-gradient">
                What I Do
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                I focus on creating seamless user experiences through clean and
                efficient code. My expertise includes:
              </p>
              <ul className="mt-4 text-gray-400 space-y-2">
                <li>✅ Responsive Web Design</li>
                <li>✅ Frontend Development with React & TypeScript</li>
                <li>✅ Animation using Framer Motion & GSAP</li>
                <li>✅ Building Scalable Applications</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
