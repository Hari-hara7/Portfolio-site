import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TerminalAnimation from "./TerminalAnimation";
import Chatbot from "./Chatbot";
import { FaHandshake, FaCode, FaLaptopCode, FaRocket, FaBriefcase, FaUsers } from "react-icons/fa";

import isCodin from "../assets/iscodin.png";
import finiteLoop from "../assets/finiteloopoffer.jpg";
import hackathon from "../assets/team.jpg";
import we4tech from "../assets/startup.jpg";
import freelance from "../assets/freelance.jpg";
import { ScrollProgress } from "../components/magicui/scroll-progress";

const collaborations = [
  {
    title: "Partner at IS-COD.IN",
    description: "Collaborated with IS-COD.IN, a leading domain service provider, delivering valuable insights and strategies.",
    icon: <FaHandshake />,
    image: isCodin,
  },
  {
    title: "Finite Loop Club",
    description: "Received an offer to work with the Finite Loop Club, contributing to innovative coding projects and mentorship initiatives.",
    icon: <FaCode />,
    image: finiteLoop,
  },
  {
    title: "Hackathon Team Member",
    description: "Worked as a vital member of a hackathon team, developing creative solutions to complex challenges.",
    icon: <FaLaptopCode />,
    image: hackathon,
  },
  {
    title: "Developer at We4Tech Agency",
    description: "Started a tech startup with friends, working as a developer to build innovative solutions and scale the business effectively.",
    icon: <FaRocket />,
    image: we4tech,
  },
  {
    title: "Freelancer Collaborations",
    description: "Collaborated with teams on freelance projects, delivering high-quality solutions for diverse clients.",
    icon: <FaBriefcase />,
    image: freelance,
  },
  {
    title: "ACM Club",
    description: "Joined the ACM Club with an offer to work on impactful projects, advancing knowledge in algorithms and programming.",
    icon: <FaUsers />,
    image: null,
  },
];

const Collaboration = () => {
  const [showContactPage, setShowContactPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactPage(true);
    }, 14000); // 14-second delay for terminal animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-20 px-6 sm:px-12 text-white font-roboto min-h-screen">
        <ScrollProgress className="fixed top-0 left-0 w-full h-1 bg-cyan-500 z-50" />
      <div className="max-w-7xl mx-auto">
        {!showContactPage ? (
          <TerminalAnimation />
        ) : (
          <>
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-500 font-orbitron"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              My Collaborations
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-300 text-center mt-4 font-Quattrocento">
              A showcase of partnerships, team efforts, and professional collaborations I've been proud to contribute to.
            </p>

            <motion.div
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {collaborations.map((collab, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gray-800 shadow-xl rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-green-400 opacity-10 hover:opacity-20 transition-opacity duration-300"></div>
                  {collab.image && (
                    <img src={collab.image} alt={collab.title} className="w-full h-40 object-cover rounded-t-2xl" />
                  )}
                  <div className="p-6 text-center">
                    <div className="flex justify-center items-center text-cyan-400 text-4xl mb-4">
                      {collab.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white font-orbitron">{collab.title}</h3>
                    <p className="text-sm text-gray-300 mt-2 font-Quattrocento">{collab.description}</p>
                    <motion.a
                      href="#"
                      className="mt-4 inline-block text-sm font-semibold text-cyan-400 underline hover:text-green-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      Learn More
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
        <Chatbot />
      </div>
    </div>
  );
};

export default Collaboration;
