import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa"; 
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPrisma,
  SiSqlite,
  SiBootstrap,
  SiBulma,
} from "react-icons/si";
import { Link } from "react-router-dom"; 
const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS6", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "SQL", icon: <SiSqlite /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Bulma", icon: <SiBulma /> },
  { name: "Framer Motion", icon: <FaFigma /> },
  { name: "TypeScript", icon: <SiTypescript /> },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
       
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Skills
        </motion.h2>

       
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          These are some of the technologies I’m proficient in:
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 4px 20px rgba(0, 255, 255, 0.4)", 
                borderColor: "#00FFFF", 
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.3,
                ease: "easeOut",
              }}
              className="bg-transparent p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-cyan-400 hover:shadow-2xl cursor-pointer transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-cyan">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
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
    to="/skills"
    className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 hover:from-green-500 hover:to-cyan-500 text-white font-semibold text-lg shadow-lg transition-all duration-300"
  >
    More Skills
  </Link>
</motion.div>

      </div>
    </section>
  );
};

export default Skills;
