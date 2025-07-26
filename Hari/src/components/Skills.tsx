import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaJava, FaStar, FaCode, FaChartLine
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb,
  SiExpress, SiMysql, SiNeovim, SiPostman, SiGoogleanalytics, SiVite,
  SiGithub, SiOpenai
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi";

const skillsByCategory = {
  Frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB", level: 92, featured: true },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff", level: 88, featured: true },
    { name: "Vite", icon: <SiVite />, color: "#646CFF", level: 80 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC", level: 95, featured: true },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 98 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: 93 },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: 91, featured: true },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 89, featured: true },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063", level: 85, featured: true },
    { name: "Express", icon: <SiExpress />, color: "#ffffff", level: 78 },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 88, featured: true },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 80, featured: true },
    { name: "NeonDB", icon: <SiNeovim />, color: "#1bc5bd", level: 70 },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", level: 82 },
  ],
  Languages: [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", level: 91, featured: true },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 89, featured: true },
    { name: "Java", icon: <FaJava />, color: "#007396", level: 70 },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 92, featured: true },
    { name: "GitHub", icon: <SiGithub />, color: "#ffffff", level: 96, featured: true },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37", level: 85 },
    { name: "Google Analytics", icon: <SiGoogleanalytics />, color: "#F9AB00", level: 70 },
    { name: "OpenAI", icon: <SiOpenai />, color: "#10A37F", level: 90, featured: true },
  ]
} as const;

const Skills = () => {
  const [category, setCategory] = useState<keyof typeof skillsByCategory>("Frontend");
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Skills | Portfolio";
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const getSkillLevel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-400 to-emerald-500";
    if (level >= 80) return "from-blue-400 to-cyan-500";
    if (level >= 70) return "from-yellow-400 to-orange-500";
    return "from-gray-400 to-gray-500";
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.6, 0.2, 0.6],
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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <FaCode className="mr-2" />
            Technical Expertise 💻
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron leading-tight mb-8"
              {...floatingAnimation}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                My Tech Arsenal
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            A comprehensive overview of my technical skills and expertise across various
            technologies, frameworks, and tools in modern web development.
          </motion.p>

          {/* Category Tabs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {(Object.keys(skillsByCategory) as Array<keyof typeof skillsByCategory>).map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-2xl border text-sm font-medium transition-all duration-300 font-orbitron backdrop-blur-sm ${
                  cat === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/25"
                    : "border-cyan-400/50 text-cyan-300 hover:bg-cyan-900/30 hover:border-cyan-400"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {skillsByCategory[category].map((skill, i) => (
                <SkillCard
                  key={i}
                  skill={skill}
                  index={i}
                  isHovered={hoveredSkill === i}
                  onMouseEnter={() => setHoveredSkill(i)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  getSkillLevel={getSkillLevel}
                  getSkillColor={getSkillColor}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <FaChartLine className="text-3xl text-cyan-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white font-orbitron">12+</h3>
              <p className="text-gray-400 text-sm">Technologies Mastered</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <FaStar className="text-3xl text-yellow-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white font-orbitron">Expert</h3>
              <p className="text-gray-400 text-sm">Average Skill Level</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <FaCode className="text-3xl text-purple-400 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white font-orbitron">5+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({
  skill,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  getSkillLevel,
  getSkillColor
}: {
  skill: any;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  getSkillLevel: (level: number) => string;
  getSkillColor: (level: number) => string;
}) => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1,
      }
    }
  };

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
        isHovered 
          ? "border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20" 
          : "border border-white/10 hover:border-cyan-500/50"
      } bg-black/40 backdrop-blur-sm hover:bg-black/60`}
    >
      {/* Featured Badge */}
      {skill.featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <FaStar className="mr-1" />
            Featured
          </div>
        </div>
      )}

      {/* Skill Level Badge */}
      <div className="absolute top-3 left-3 z-10">
        <div className={`bg-gradient-to-r ${getSkillColor(skill.level)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
          {getSkillLevel(skill.level)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-12">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div 
            className="text-5xl transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300 mb-4 text-center">
          {skill.name}
        </h3>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden mb-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.2, delay: index * 0.1 }}
            className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} shadow-inner`}
          />
        </div>

        {/* Proficiency Text */}
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-400 font-Quattrocento">Proficiency</span>
          <span className="text-cyan-400 font-orbitron font-semibold">{skill.level}%</span>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl" />
      </div>

      {/* Skill Color Accent */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      />
    </motion.div>
  );
};

export default Skills;
