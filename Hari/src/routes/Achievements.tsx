import React from "react";
import { motion } from "framer-motion";

// Example Achievements (replace with your actual achievements)
const achievements = [
  {
    title: "Certified Full Stack Developer",
    description: "Completed a comprehensive full stack development course.",
    year: "2024",
  },
  {
    title: "Hackathon Winner",
    description: "Won 1st place in a university-wide hackathon competition.",
    year: "2023",
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to several open-source projects on GitHub.",
    year: "2022",
  },
  {
    title: "Best Project Award",
    description: "Awarded for developing the best software project of the year.",
    year: "2022",
  },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="bg-bg text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Achievements
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          Here are some of my proudest moments and accomplishments.
        </motion.p>

        {/* Achievements List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gradient">{achievement.title}</h3>
              <p className="text-gray-400 mt-2">{achievement.description}</p>
              <span className="block mt-4 text-sm text-gray-500">{achievement.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
