import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chatbot from "./Chatbot";
import { useInView } from 'react-intersection-observer';
import MatrixBackground from "./MatrixBackground";
import { ScrollProgress } from "../components/magicui/scroll-progress";
import TerminalAnimation from './TerminalAnimation';

import TrueFocus from "./TrueFocus";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaServer,
  FaGithub,
  FaGit,
  FaPython,
  FaJava,
  FaTwitch,
  FaCube,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiFramer,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiRender,
  SiClerk,
  SiGoogleanalytics,
  SiPostman,
  SiInsomnia,
  SiGooglecloud,
  SiTailwindcss,
  SiVite,

  SiCloudinary,

} from "react-icons/si";

import { MdApi } from "react-icons/md";




const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Auto-hide terminal after TerminalAnimation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 15000); // Adjust based on TerminalAnimation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 md:px-12 mt-16 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <ScrollProgress className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 z-50" />

      {isLoading ? (
        <TerminalAnimation />
      ) : (
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6 font-orbitron">
                My Skills
              </h2>
              
              {/* Decorative Elements */}
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-cyan-400 rounded-full"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full m-1"></div>
                </motion.div>
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Discover my technical expertise across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">
                modern technologies
              </span>{' '}
              and development tools
            </motion.p>
          </div>

          <div className="mt-12 space-y-16">
            <SkillCategory
              title="Frontend Development"
              skills={[
                { icon: <FaHtml5 />, name: "HTML5", color: "text-red-500" },
      { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
      { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
      { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-500" },
      { icon: <SiVite />, name: "Vite", color: "text-orange-500" },
              ]}
            />

            <SkillCategory
              title="Backend Development"
              skills={[
                { icon: <SiFirebase />, name: "Firebase", color: "text-orange-500" },
                { icon: <FaServer />, name: "Node.js", color: "text-green-500" },
                { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
                { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
                { icon: <SiPrisma />, name: "Prisma", color: "text-blue-400" },
              ]}
            />

            <SkillCategory
              title="Third-Party APIs"
              skills={[
                { icon: <MdApi />, name: "Formspree", color: "text-purple-500" },
                { icon: <MdApi />, name: "Google APIs", color: "text-blue-400" },
                { icon: <SiClerk />, name: "Clerk API", color: "text-indigo-600" },
                { icon: <MdApi />, name: "Nasa API", color: "text-red-500" },
                { icon: <FaTwitch />, name: "Tawk.to", color: "text-teal-500" },
                { icon: <MdApi />, name: "Twilio", color: "text-emerald-500" },
                { icon: <SiGooglecloud />, name: "Gemini API", color: "text-orange-500" },
                { icon: <MdApi />, name: "Tidio", color: "text-green-500" },
              ]}
            />

            <SkillCategory
              title="Design Tools"
              skills={[
                { icon: <SiFramer />, name: "Framer", color: "text-blue-400" },
                { icon: <SiCanva />, name: "Canva", color: "text-pink-400" },
                { icon: <FaCube />, name: "Spline", color: "text-blue-500" }, 
              ]}
            />

            <SkillCategory
              title="Deployment Platforms"
              skills={[
                { icon: <SiNetlify />, name: "Netlify", color: "text-green-400" },
                { icon: <SiVercel />, name: "Vercel", color: "text-white" },
                { icon: <SiRender />, name: "Render", color: "text-blue-500" },
                { icon: <FaGithub />, name: "GitHub Pages", color: "text-white" },
              ]}
            />

            <SkillCategory
              title="Tools"
              skills={[
                { icon: <FaGit />, name: "Git", color: "text-orange-500" },
                { icon: <FaGithub />, name: "GitHub", color: "text-gray-400" },
                { icon: <SiPostman />, name: "Postman", color: "text-red-400" },
                { icon: <SiInsomnia />, name: "Insomnia", color: "text-purple-400" },
                { icon: <SiGoogleanalytics />, name: "Google Analytics", color: "text-green-500" }, 
              ]}
            />

            <SkillCategory
              title="Programming Languages"
              skills={[
                { icon: <FaJava />, name: "Java", color: "text-red-600" },
                { icon: <FaPython />, name: "Python", color: "text-yellow-500" },
                { icon: <FaServer />, name: "C", color: "text-blue-400" },
              ]}
            />

            <ProgressSection
              progressData={[
                { name: "Frontend Development", percentage: 90 },
                { name: "Backend Development", percentage: 75 },
                { name: "UI/UX Design", percentage: 95 },
                { name: "DevOps", percentage: 90 },
              ]}
            />
          </div>
        </div>
      )}
      <Chatbot />
    </section>
  );
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: { icon: React.ReactNode; name: string; color: string }[];
}) => (
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
          <div className="absolute inset-0 border-[3px] border-cyan-500 rounded-lg"></div>
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

const ProgressSection = ({
  progressData,
}: {
  progressData: { name: string; percentage: number }[];
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  return (
    <div ref={ref} className="mt-12">
      <h3 className="text-3xl font-semibold text-gradient mb-6">Progress</h3>
      <div className="space-y-6">
        {progressData.map((data, index) => (
          <div key={index} className="text-left">
            <p className="text-lg font-semibold text-gray-400 mb-2">{data.name}</p>

            <div className="w-full bg-gray-800 h-2 rounded-full shadow-md">
              <motion.div
                className="h-full bg-cyan-500 rounded-full"
                style={{ width: `${data.percentage}%` }}
                initial={{ width: 0 }}
                animate={{
                  width: inView ? `${data.percentage}%` : 0,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
              />
            </div>

            <div className="flex justify-between text-gray-400 mt-2">
              <span className="text-sm">{data.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Skills;
