import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaHiking,
  FaCode,
  FaPuzzlePiece,
  FaVolleyballBall,
  FaLaptopCode,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

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
          Passionate developer and tech enthusiast crafting engaging web
          experiences and solving real-world problems.
        </motion.p>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 space-y-12 text-left"
        >
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gradient">Education</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start space-x-4">
                <FaGraduationCap className="text-cyan-400 text-2xl" />
                <div>
                  <h4 className="text-lg font-medium text-white">
                    B.Tech in CSE (FSD)
                  </h4>
                  <p className="text-sm text-gray-300">
                    NMAMIT, Nitte (2023-2027)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaSchool className="text-pink-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Intermediate (MPC) - 95%
                  </h4>
                  <p className="text-sm text-gray-300">
                    Sri Chaitanya College, Andhra Pradesh
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaSchool className="text-yellow-400 text-2xl" />
                <div>
                  <h4 className="text-lg font-medium text-white">
                    High School - 97%
                  </h4>
                  <p className="text-sm text-gray-300">
                    Roots Public School, Andhra Pradesh (2023)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gradient">Skills</h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-4">
                <FaCode className="text-pink-500 text-2xl" />
                <p className="text-lg text-gray-300">Frontend Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaLaptopCode className="text-cyan-400 text-2xl" />
                <p className="text-lg text-gray-300">React & TypeScript</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPuzzlePiece className="text-yellow-400 text-2xl" />
                <p className="text-lg text-gray-300">Problem Solving</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaHiking className="text-cyan-400 text-2xl" />
                <p className="text-lg text-gray-300">Animation (Framer Motion)</p>
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gradient">Hobbies</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <FaVolleyballBall className="text-cyan-400 text-2xl" />
                <p className="text-lg text-gray-300">Playing Volleyball</p>
              </div>
              <div className="flex items-center space-x-4">
                <GiCricketBat className="text-pink-500 text-2xl" />
                <p className="text-lg text-gray-300">Playing Cricket</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaHiking className="text-yellow-400 text-2xl" />
                <p className="text-lg text-gray-300">Hiking Adventures</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPuzzlePiece className="text-cyan-400 text-2xl" />
                <p className="text-lg text-gray-300">Solving Cubes</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-center"
          >
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-l hover:from-pink-600 hover:to-cyan-400 transition duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
