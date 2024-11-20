import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chatbot from "./Chatbot"; // Import the chatbot

import { 
  FaGraduationCap, 
  FaSchool, 
  FaHiking, 
  FaCode, 
  FaPuzzlePiece, 
  FaVolleyballBall 
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import MyImage from "../assets/Hari1.jpg"; // Adjust the path to your image
import Resume from "../assets/k.b.Hariharanath.pdf"; // Path to your resume file

const Skills: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  const imageVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-800 border-b-4 border-gray-200"></div>
        </div>
      ) : (
        <section
          id="about"
          className="relative bg-dark-800 text-white py-16 px-6 md:px-12"
        >
          {/* Main Content */}
          <div className="relative mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Section: About Me */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-justify"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gradient mb-6">
                About Me
              </h2>
              <div className="flex justify-center mb-6">
                <motion.img
                  src={MyImage}
                  alt="My Journey"
                  className="rounded-lg shadow-lg w-64 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl h-64 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap="tap"
                />
              </div>
              <p className="text-lg leading-relaxed font-light text-gray-300">
                Hi, I’m a dedicated developer and lifelong learner with a passion
                for crafting innovative solutions in technology. Currently pursuing
                a B.Tech in Computer Science at NMAMIT, I specialize in building
                user-friendly and responsive web applications that merge design with functionality.
              </p>
              <p className="text-lg leading-relaxed font-light text-gray-300">
                I have initiated and successfully managed multiple ventures:
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>
                    <strong>Academic Pal:</strong> A platform solving real-world problems by providing notes and resources for students, gaining over 2.7k users in Nitte and becoming one of the most visited websites in the region.
                  </li>
                  <li>
                    <strong>We4Tech Agency:</strong> Successfully completed 17 portfolio projects for SRM University students, driving impactful results.
                  </li>
                  <li>
                    <strong>Skill Crafters:</strong> A platform delivering roadmaps and resources for various technologies, generating a steady income while helping others advance their careers.
                  </li>
                  <li>
                    <strong>Design Grid:</strong> A repository offering free 3D templates and pattern-based designs, widely used by students from NIT Jamshedpur.
                  </li>
                </ul>
              </p>
              <p className="text-lg leading-relaxed font-light text-gray-300">
                My journey is driven by a love for problem-solving, a keen eye for design, and a goal to make an impact in the world of technology. Beyond coding, I enjoy outdoor activities, sports, and puzzles that inspire creativity and teamwork.
              </p>
              {/* Download Resume Button */}
              <div className="mt-6">
                <a
                  href={Resume}
                  download="My_Resume.pdf"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-cyan-400 hover:to-green-400 focus:ring focus:ring-cyan-300 transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* Right Section: Education & Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Education Section */}
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-gradient">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <FaGraduationCap className="text-purple-500 text-2xl" />
                    <div>
                      <h4 className="text-lg font-medium">B.Tech in CSE (FSD)</h4>
                      <p className="text-sm text-gray-400">
                        NMAMIT, Nitte (2023-2027)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaSchool className="text-pink-500 text-2xl" />
                    <div>
                      <h4 className="text-lg font-medium">
                        Intermediate (MPC) - 95%
                      </h4>
                      <p className="text-sm text-gray-400">
                        Sri Chaitanya College, Andhra Pradesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaSchool className="text-yellow-500 text-2xl" />
                    <div>
                      <h4 className="text-lg font-medium">High School - 97%</h4>
                      <p className="text-sm text-gray-400">
                        Roots Public School, Andhra Pradesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hobbies Section */}
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-gradient">
                  Hobbies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4">
                    <FaVolleyballBall className="text-cyan-400 text-2xl" />
                    <p className="text-lg font-light">Playing Volleyball</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <GiCricketBat className="text-pink-500 text-2xl" />
                    <p className="text-lg font-light">Playing Cricket</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaHiking className="text-yellow-400 text-2xl" />
                    <p className="text-lg font-light">Playing Kabaddi</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPuzzlePiece className="text-cyan-400 text-2xl" />
                    <p className="text-lg font-light">Solving Different Cubes</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaCode className="text-pink-500 text-2xl" />
                    <p className="text-lg font-light">
                      Building Interactive Websites
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
            {/* Chatbot */}
       <Chatbot />
        </section>
      )}
    </>
  );
};

export default Skills;
