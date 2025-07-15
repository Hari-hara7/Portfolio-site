import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaJava
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb,
  SiExpress, SiMysql, SiNeovim, SiPostman, SiGoogleanalytics, SiVite,
  SiGithub, SiOpenai
} from "react-icons/si";
import SkillsRadar from './SkillsRadar';
import ProjectStatsCharts from './ProjectStatsCharts';

const skillsByCategory = {
  Frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB", level: 92 },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff", level: 88 },
    { name: "Vite", icon: <SiVite />, color: "#646CFF", level: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC", level: 95 },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 98 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: 93 },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: 91 },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 89 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063", level: 85 },
    { name: "Express", icon: <SiExpress />, color: "#ffffff", level: 78 },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 88 },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 80 },
    { name: "NeonDB", icon: <SiNeovim />, color: "#1bc5bd", level: 70 },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", level: 82 },
  ],
  Languages: [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: 91 },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 89 },
    { name: "Java", icon: <FaJava />, color: "#007396", level: 70 },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 92 },
    { name: "GitHub", icon: <SiGithub />, color: "#ffffff", level: 96 },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37", level: 85 },
    { name: "Google Analytics", icon: <SiGoogleanalytics />, color: "#F9AB00", level: 70 },
    { name: "OpenAI", icon: <SiOpenai />, color: "#10A37F", level: 90 },
  ]
};

const Skills = () => {
  const [category, setCategory] = useState("Frontend");

  useEffect(() => {
    document.title = "Skills | Portfolio";
  }, []);

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-black text-white transition-all duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-12 font-orbitron">
          My Tech Arsenal
        </h2>

        {/* Enhanced Skills Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <SkillsRadar />
        </motion.div>

        {/* Traditional Skills Grid */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.keys(skillsByCategory).map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.08 }}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 font-orbitron ${
                  cat === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "border-cyan-400 text-cyan-300 hover:bg-cyan-900/30"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {skillsByCategory[category].map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="group bg-white/5 hover:bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold font-orbitron">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                      className="h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-inner"
                    />
                  </div>
                  <p className="text-xs mt-2 text-gray-400 tracking-wide">{skill.level}% proficiency</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Statistics Charts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
            Project Analytics & Statistics
          </h3>
          <ProjectStatsCharts />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
