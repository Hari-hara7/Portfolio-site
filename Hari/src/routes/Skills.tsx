import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaServer,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiBulma,
  SiThreedotjs,
  SiGreensock,
  SiFigma,
  SiFramer,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiRender,
  SiClerk,
  SiGoogleanalytics,
} from "react-icons/si";

const Skills: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);// Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="bg-[#030712] text-white py-20 px-6 md:px-12 mt-16">
    {isLoading ? (
      <div className="flex justify-center items-center h-[50vh]">
        {/* Loader Spinner */}
        <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400 border-b-4 border-gray-700"></div>
      </div>
    ) : (
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400"
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
            Hover over the icons to explore my expertise in development, design,
            and deployment.
          </motion.p>

          {/* Skill Categories */}
          <div className="mt-12 space-y-16">
            <SkillCategory
              title="Development Skills"
              skills={[
                { icon: <FaHtml5 />, name: "HTML5", color: "text-red-500" },
                { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
                { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
                { icon: <FaReact />, name: "React", color: "text-cyan-400" },
                { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-500" },
                { icon: <SiFirebase />, name: "Firebase", color: "text-orange-500" },
                { icon: <FaServer />, name: "SQL", color: "text-purple-500" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-blue-300" },
                { icon: <FaBootstrap />, name: "Bootstrap", color: "text-indigo-600" },
                { icon: <SiBulma />, name: "Bulma", color: "text-teal-500" },
                { icon: <SiThreedotjs />, name: "Three.js", color: "text-green-400" },
                { icon: <SiGreensock />, name: "GSAP", color: "text-green-600" },
              ]}
            />

            <SkillCategory
              title="Design Tools"
              skills={[
                { icon: <SiFigma />, name: "Figma", color: "text-purple-400" },
                { icon: <SiFramer />, name: "Framer Motion", color: "text-blue-400" },
                { icon: <SiCanva />, name: "Canva", color: "text-pink-400" },
                { icon: <SiThreedotjs />, name: "Spline", color: "text-green-400" },
              ]}
            />

            <SkillCategory
              title="Deployment Platforms"
              skills={[
                { icon: <SiNetlify />, name: "Netlify", color: "text-green-400" },
                { icon: <SiVercel />, name: "Vercel", color: "text-black" },
                { icon: <SiRender />, name: "Render", color: "text-blue-500" },
              ]}
            />

            <SkillCategory
              title="APIs & Tools"
              skills={[
                { icon: <SiClerk />, name: "Clerk API", color: "text-indigo-600" },
                { icon: <SiGoogleanalytics />, name: "Google Analytics", color: "text-blue-500" },
                { icon: <FaGithub />, name: "GitHub", color: "text-gray-400" },
                { icon: <FaGit />, name: "Git", color: "text-orange-500" },
              ]}
            />
          </div>
        </div>
      )}
    </section>
  );
};

const SkillCategory: React.FC<{
  title: string;
  skills: { icon: React.ReactNode; name: string; color: string }[];
}> = ({ title, skills }) => (
  <div>
    <h3 className="text-2xl font-semibold text-gradient">{title}</h3>
    <motion.div
      className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group flex flex-col items-center p-4 bg-dark-800 rounded-lg shadow-lg cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 border-[3px] border-transparent rounded-lg animate-gradient-border"></div>
          <div
            className={`text-4xl z-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
          >
            {skill.icon}
          </div>
          <p className="mt-3 text-sm text-gray-300 font-semibold z-10">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Skills;
