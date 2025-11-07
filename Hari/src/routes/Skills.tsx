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
  FaCuttlefish,
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
                
                { icon: <FaCuttlefish />, name: "C++", color: "text-blue-400" },
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
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <div className="text-center mb-12">
      <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 font-orbitron">
        {title}
      </h3>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
    </div>
    
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, staggerChildren: 0.1 }}
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.1, 
            y: -10,
            boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-2xl shadow-2xl cursor-pointer overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
          viewport={{ once: true }}
        >
          {/* Animated Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          
          {/* Glowing Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className={`text-5xl md:text-6xl ${skill.color} mb-4 group-hover:scale-110 transition-all duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {skill.icon}
            </motion.div>
            
            <p className="text-sm md:text-base text-gray-300 font-semibold group-hover:text-white transition-colors duration-300 text-center">
              {skill.name}
            </p>
            
            {/* Skill Level Indicator */}
            <div className="w-full h-1 bg-gray-700 rounded-full mt-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${70 + Math.random() * 30}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
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
    <motion.div 
      ref={ref} 
      className="mt-20 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 font-orbitron">
          Expertise Level
        </h3>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg">My proficiency across different domains</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {progressData.map((data, index) => (
          <motion.div 
            key={index} 
            className="bg-black/30 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold text-white">{data.name}</h4>
              <motion.span 
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                {data.percentage}%
              </motion.span>
            </div>

            <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{
                  width: inView ? `${data.percentage}%` : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3 + 1,
                  }}
                />
              </motion.div>
            </div>

            {/* Skill indicators */}
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};



export default Skills;
