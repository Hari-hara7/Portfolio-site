import React from "react";
import { motion } from "framer-motion";

// Example Skills (replace with your actual skills)
const skills = [
  { name: "React", icon: "🌀" },
  { name: "TypeScript", icon: "💻" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "Node.js", icon: "🟩" },
  { name: "Git", icon: "🔧" },
  { name: "Framer Motion", icon: "⚡" },
  { name: "HTML & CSS", icon: "🔲" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-bg text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Skills
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          These are some of the technologies I’m proficient in:
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="text-4xl mb-4 text-cyan-400">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gradient">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
