import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHandshake, FaGithub, FaTrophy, FaBriefcase, FaCode, FaGlobe, FaEye, FaStar, FaUsers } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";


const collaborations = [
  {
    title: "Partnered with IS-COD.IN",
    description: "Collaborated with IS-COD.IN for domain services and web hosting solutions.",
    year: "2024",
    category: "Partnership",
    featured: true,
    icon: <FaHandshake className="text-4xl text-blue-400" />,
    link: "https://is-cod.in",
    initialViewCount: 500,
  },
 {
    title: "ACM Club Website Developer",
    description: "Developed a website for the ACM Club at NMAMIT, enhancing event management and communication.",
    year: "2024",
    category: "Development",
    featured: true,
    icon: <FaGlobe className="text-4xl text-green-400" />,
    initialViewCount: 500,
  },
  {
    title: "Open-Source Contributor",
    description: "Collaborated with several developers on GitHub to improve open-source projects and contribute to the community.",
    year: "2023",
    category: "Open Source",
    icon: <FaGithub className="text-4xl text-gray-400" />,
    initialViewCount: 500,
  },
  {
    title: "Hackathon Team Member",
    description: "Worked with talented teams to develop winning projects in multiple hackathons across different domains.",
    year: "2024",
    category: "Competition",
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    initialViewCount: 500,
  },
  {
    title: "Freelance Developer",
    description: "Worked with various clients to deliver custom software solutions and modern web applications.",
    year: "2024",
    category: "Freelance",
    icon: <FaBriefcase className="text-4xl text-cyan-400" />,
    initialViewCount: 500,
  },
];

const Collaboration: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [viewCounts, setViewCounts] = useState(() => {
    return collaborations.map((collaboration) => collaboration.initialViewCount);
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updatedCounts = viewCounts.map((count) => count + 1);
    setViewCounts(updatedCounts);
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

  const featuredCollaborations = collaborations.filter(collab => collab.featured);
  const otherCollaborations = collaborations.filter(collab => !collab.featured);

  return (
    <section id="collaboration" className="relative min-h-screen overflow-hidden bg-black">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <FaUsers className="mr-2" />
            Collaborative Journey 🤝
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron leading-tight mb-8"
              {...floatingAnimation}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                My Collaborations
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            These are some of the exciting collaborations and partnerships I've been part of,
            showcasing teamwork, innovation, and professional growth across various domains.
          </motion.p>

          {/* Featured Collaborations */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-8 font-orbitron">
              🌟 Featured Collaborations
            </h3>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredCollaborations.map((collaboration, index) => (
                <CollaborationCard
                  key={index}
                  collaboration={collaboration}
                  index={index}
                  viewCount={viewCounts[collaborations.indexOf(collaboration)]}
                  isHovered={hoveredCard === index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  featured={true}
                />
              ))}
            </div>
          </motion.div>

          {/* Other Collaborations */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 font-orbitron">
              🚀 All Collaborations
            </h3>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {otherCollaborations.map((collaboration, index) => (
                <CollaborationCard
                  key={index + featuredCollaborations.length}
                  collaboration={collaboration}
                  index={index + featuredCollaborations.length}
                  viewCount={viewCounts[collaborations.indexOf(collaboration)]}
                  isHovered={hoveredCard === index + featuredCollaborations.length}
                  onMouseEnter={() => setHoveredCard(index + featuredCollaborations.length)}
                  onMouseLeave={() => setHoveredCard(null)}
                  featured={false}
                />
              ))}
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <Link
              to="/collaboration"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 backdrop-blur-sm"
            >
              <FaHandshake className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              More Collaborations
              <HiSparkles className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const CollaborationCard = ({
  collaboration,
  index,
  viewCount,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  featured
}: {
  collaboration: any;
  index: number;
  viewCount: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  featured: boolean;
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
      whileHover={{ scale: 1.03, y: -5 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
        isHovered 
          ? "border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20" 
          : "border border-white/10 hover:border-cyan-500/50"
      } bg-black/40 backdrop-blur-sm hover:bg-black/60`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <FaStar className="mr-1" />
            Featured
          </div>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30">
          {collaboration.category}
        </div>
      </div>

      {/* Views Counter */}
      <div className="absolute top-12 right-4 z-10">
        <div className="flex items-center bg-black/40 backdrop-blur-sm text-gray-300 text-xs px-2 py-1 rounded-full border border-white/20">
          <FaEye className="mr-1" />
          {viewCount}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-16">
        {/* Icon and Year */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {collaboration.icon}
            <span className="text-cyan-400 font-orbitron text-sm font-semibold">
              {collaboration.year}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300 mb-3">
          {collaboration.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 font-Quattrocento">
          {collaboration.description}
        </p>

        {/* Link Button */}
        {collaboration.link && (
          <div className="mt-4">
            <a 
              href={collaboration.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white text-sm rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGlobe />
              Visit Link
            </a>
          </div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default Collaboration;
