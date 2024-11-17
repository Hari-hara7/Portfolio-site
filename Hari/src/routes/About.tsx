import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaHiking, FaCode, FaPuzzlePiece, FaVolleyballBall } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const Skills: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          {/* Loader Spinner */}
          <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400 border-b-4 border-gray-700"></div>
        </div>
      ) : (
        <section
          id="about"
          className="relative bg-dark-800 text-white py-16 px-6 md:px-12"
        >
          {/* Overlapping Header */}
          <div className="absolute top-0 left-0 w-full -mt-20">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto px-4"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Discover My Journey
              </h1>
            </motion.div>
          </div>

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
              <p className="text-lg leading-relaxed font-light text-gray-300">
                Hi, I’m a dedicated developer and lifelong learner with a passion
                for crafting innovative solutions in technology. Currently pursuing
                a B.Tech in Computer Science at NMAMIT, I specialize in building
                user-friendly and responsive web applications that merge design with functionality.
                <br />
                My journey is driven by a love for problem-solving, a keen eye for design, and a goal to make an impact in the world of technology. Whether it's developing interactive interfaces or collaborating on creative projects, I strive for excellence in everything I do.
              </p>
              <p className="text-lg leading-relaxed font-light text-gray-300">
                Beyond coding, I enjoy outdoor activities, sports, and puzzles that
                keep my mind and body active. These hobbies not only inspire my
                creativity but also shape my perspective on teamwork and
                perseverance.
              </p>
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
        </section>
      )}
    </>
  );
};

export default Skills;
