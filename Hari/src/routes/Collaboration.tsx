import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TerminalAnimation from './TerminalAnimation'; // Assuming this is the terminal animation component
import isCodin from '../assets/iscodin.png';
import finiteLoop from '../assets/finiteloopoffer.jpg';
import hackathon from '../assets/team.jpg';
import we4tech from '../assets/startup.jpg';
import freelance from '../assets/freelance.jpg';
import Chatbot from './Chatbot'; // Assuming you have a Chatbot component
import { FaHandshake, FaCode, FaLaptopCode, FaRocket, FaBriefcase, FaUsers } from 'react-icons/fa';

const collaborations = [
  {
    title: 'Partner at IS-COD.IN',
    description:
      'Collaborated as a partner with IS-COD.IN, a leading domain service provider, delivering valuable insights and strategies.',
    icon: <FaHandshake />,
    image: isCodin,
  },
  {
    title: 'Finite Loop Club',
    description:
      'Received an offer to work with the Finite Loop Club, contributing to innovative coding projects and mentorship initiatives.',
    icon: <FaCode />,
    image: finiteLoop,
  },
  {
    title: 'Hackathon Team Member',
    description:
      'Worked as a vital member of a hackathon team, developing creative solutions to complex challenges.',
    icon: <FaLaptopCode />,
    image: hackathon,
  },
  {
    title: 'Developer at We4Tech Agency',
    description:
      'Started a tech startup with friends, working as a developer to build innovative solutions and scale the business effectively.',
    icon: <FaRocket />,
    image: we4tech,
  },
  {
    title: 'Freelancer Collaborations',
    description:
      'Collaborated with teams on freelance projects, delivering high-quality solutions for diverse clients.',
    icon: <FaBriefcase />,
    image: freelance,
  },
  {
    title: 'ACM Club',
    description:
      'Joined the ACM Club with an offer to work on impactful projects, advancing knowledge in algorithms and programming.',
    icon: <FaUsers />,
    image: null,
  },
];

const Collaboration: React.FC = () => {
  const [showContactPage, setShowContactPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactPage(true); // After 9 seconds, show the collaboration content
    }, 14000); // 9-second delay for terminal animation

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-8 lg:px-16 text-white font-roboto">
        <div className="max-w-16xl mx-auto">
          {/* Conditionally render Terminal Animation or Collaborations */}
          {!showContactPage ? (
            <TerminalAnimation /> // Terminal animation will show first
          ) : (
            <>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-400 text-center mt-12">
                My Collaborations
              </h2>
              <p className="text-lg md:text-xl mt-4 text-gray-300 text-center">
                A showcase of partnerships, team efforts, and professional collaborations I've been proud to contribute to.
              </p>

              <motion.div
                className="mt-16 flex flex-wrap justify-center gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {collaborations.map((collaboration, index) => (
                  <motion.div
                    key={index}
                    className="group relative w-80 h-96 bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-green-400 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    {collaboration.image && (
                      <img
                        src={collaboration.image}
                        alt={collaboration.title}
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-gray-900 to-transparent p-6 text-center">
                      <div className="flex justify-center items-center text-cyan-400 text-4xl mb-4">
                        {collaboration.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{collaboration.title}</h3>
                      <p className="text-sm text-gray-300 mt-2">{collaboration.description}</p>
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
          <Chatbot /> {/* Add any other components like Chatbot */}
        </div>
      </section>
    </div>
  );
};

export default Collaboration;
