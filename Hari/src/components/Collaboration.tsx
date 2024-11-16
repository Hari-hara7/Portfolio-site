import React from "react";
import { motion } from "framer-motion";

// Example Collaborations (replace with your actual collaboration details)
const collaborations = [
  {
    title: "Open-Source Contributor",
    description: "Collaborated with several developers on GitHub to improve open-source projects.",
    year: "2023",
    logo: "🔗",
  },
  {
    title: "Hackathon Team Member",
    description: "Worked with a talented team to develop a winning project in a hackathon.",
    year: "2022",
    logo: "🏆",
  },
  {
    title: "Freelance Developer",
    description: "Worked with various clients to deliver custom software solutions.",
    year: "2021",
    logo: "💼",
  },
  {
    title: "Tech Meetup Speaker",
    description: "Collaborated with a local tech meetup to give a presentation on web development.",
    year: "2022",
    logo: "🎤",
  },
];

const Collaboration: React.FC = () => {
  return (
    <section id="collaboration" className="bg-bg text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Collaborations
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          These are some of the exciting collaborations and partnerships I've been a part of.
        </motion.p>

        {/* Collaborations List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {collaborations.map((collaboration, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="text-4xl mb-4 text-cyan-400">{collaboration.logo}</div>
              <h3 className="text-2xl font-semibold text-gradient">{collaboration.title}</h3>
              <p className="text-gray-400 mt-2">{collaboration.description}</p>
              <span className="block mt-4 text-sm text-gray-500">{collaboration.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
