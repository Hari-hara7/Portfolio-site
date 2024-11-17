import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Collaborations Data
const collaborations = [
  {
    title: "Partnered with IS-COD.IN",
    description: (
      <>
        Collaborated with <a href="https://is-cod.in" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">IS-COD.IN</a> for domain services and website solutions.
      </>
    ),
    year: "2024",
    logo: "🤝",
    initialViewCount: 140,
  },
  {
    title: "Open-Source Contributor",
    description: "Collaborated with several developers on GitHub to improve open-source projects.",
    year: "2023",
    logo: "🔗",
    initialViewCount: 120,
  },
  {
    title: "Hackathon Team Member",
    description: "Worked with a talented team to develop a winning project in a hackathon.",
    year: "2022",
    logo: "🏆",
    initialViewCount: 150,
  },
  {
    title: "Freelance Developer",
    description: "Worked with various clients to deliver custom software solutions.",
    year: "2021",
    logo: "💼",
    initialViewCount: 200,
  },
  {
    title: "Finite Loop Club Developer",
    description: "Got an offer from the Finite Loop Club as a developer and actively collaborating on innovative projects.",
    year: "2024",
    logo: "👨‍💻",
    initialViewCount: 180,
  },
  
  {
    title: "ACM Club Website Developer",
    description: "Developed a website for the ACM Club at NMAMIT, enhancing event management and communication.",
    year: "2024",
    logo: "🌐",
    initialViewCount: 90,
  },
  
];

const Collaboration: React.FC = () => {
  const [viewCounts, setViewCounts] = useState(() => {
    return collaborations.map((collaboration) => collaboration.initialViewCount);
  });

  useEffect(() => {
    const updatedCounts = viewCounts.map((count) => count + 1);
    setViewCounts(updatedCounts);
  }, []);

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
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-cyan-400 transition-all duration-300"
            >
              {/* Logo */}
              <div className="text-4xl mb-4 text-cyan-400">{collaboration.logo}</div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gradient">{collaboration.title}</h3>
              {/* Description */}
              <p className="text-gray-400 mt-2">{collaboration.description}</p>
              {/* Year */}
              <span className="block mt-4 text-sm text-gray-500">{collaboration.year}</span>
              {/* View Count */}
              <div className="absolute top-4 right-4 text-sm text-gray-400">
                <strong>Views:</strong> {viewCounts[index]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
