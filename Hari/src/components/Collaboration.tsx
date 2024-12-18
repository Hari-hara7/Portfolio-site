import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const collaborations = [
  {
    title: "Partnered with IS-COD.IN",
    description: (
      <>
        Collaborated with{" "}
        <a
          href="https://is-cod.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline"
        >
          IS-COD.IN
        </a>{" "}
        for domain services and website solutions.
      </>
    ),
    year: "2024",
    logo: "🤝",
    initialViewCount: 500,
  },
  {
    title: "Open-Source Contributor",
    description:
      "Collaborated with several developers on GitHub to improve open-source projects.",
    year: "2023",
    logo: "🔗",
    initialViewCount: 500,
  },
  {
    title: "Hackathon Team Member",
    description:
      "Worked with a talented team to develop a winning project in a hackathon.",
    year: "2022",
    logo: "🏆",
    initialViewCount: 500,
  },
  {
    title: "Freelance Developer",
    description: "Worked with various clients to deliver custom software solutions.",
    year: "2021",
    logo: "💼",
    initialViewCount: 500,
  },
  {
    title: "Finite Loop Club Developer",
    description:
      "Got an offer from the Finite Loop Club as a developer and actively collaborating on innovative projects.",
    year: "2024",
    logo: "👨‍💻",
    initialViewCount: 500,
  },
  {
    title: "ACM Club Website Developer",
    description:
      "Developed a website for the ACM Club at NMAMIT, enhancing event management and communication.",
    year: "2024",
    logo: "🌐",
    initialViewCount: 500,
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
    <motion.section
      id="collaboration"
      className="bg-bg text-white py-16 px-6 md:px-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Collaborations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          These are some of the exciting collaborations and partnerships I've been a part of.
        </motion.p>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {collaborations.map((collaboration, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-dark-800 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 border-2 border-cyan-500 hover:shadow-2xl hover:border-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105"
            >
              <div className="text-4xl mb-4 text-cyan-400">{collaboration.logo}</div>
              <h3 className="text-2xl font-semibold text-gradient">{collaboration.title}</h3>
              <p className="text-gray-400 mt-2">{collaboration.description}</p>
              <span className="block mt-4 text-sm text-gray-500">{collaboration.year}</span>
              <div className="absolute top-4 right-4 text-sm text-gray-400">
                <strong>Views:</strong> {viewCounts[index]}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <Link
            to="/collaboration"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 hover:from-green-500 hover:to-cyan-500 text-white font-semibold text-lg shadow-lg transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Collaboration;
