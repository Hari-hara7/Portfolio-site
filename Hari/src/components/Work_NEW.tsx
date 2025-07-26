import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaEye, FaStar, FaCode } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

import project1Image from "../assets/we4tech.jpg";
import project2Image from "../assets/globallane.jpg";
import project3Image from "../assets/designgrid-BoOHbFyy.jpg";
import project4Image from "../assets/skillcrafters.jpg";
import project5Image from "../assets/academicpal.png";
import project6Image from "../assets/acm.jpg";
import project7Image from "../assets/aikyam1.png";
import crypto from "../assets/cryptotracker.png";
import annaraksha from "../assets/annaraksha.png";
import game from "../assets/gamestore.png";
import codecrash from "../assets/codecrash.png";
import mallannahair from "../assets/mallanna.png";
import campusleave from '../assets/leave.png';
import intership from '../assets/internship.png';

const Work: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [projects, setProjects] = useState([
    {
      title: "Crypto Tracker",
      description:
        "A real-time cryptocurrency tracking platform utilizing the CoinGecko API to provide live market data, price updates, and historical trends.",
      image: crypto, 
      github: "https://github.com/Hari-hara7/Crypto.git", 
      preview: "https://crypto-beta-five.vercel.app/",
      views: 750,
      featured: true,
      tech: ["React", "API", "CSS"]
    },
    {
      title: "Academic Pal",
      description:
        "A platform offering notes and resources for B.Tech students, organized by year and branch.",
      image: project5Image,
      github: "https://github.com/Hari-hara7/Academicpal--login.git",
      preview: "https://academicpal.in/",
      views: 500,
      featured: true,
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Anna Raksha",
      description:
        "A food donation and distribution platform connecting donors with NGOs and individuals in need, ensuring efficient food management and reducing waste.",
      image: annaraksha, 
      github: "https://github.com/Hari-hara7/anna-raksha.git", 
      preview: "https://anna-raksha-bmu9.vercel.app/",
      views: 620,
      featured: true,
      tech: ["Next.js", "Firebase", "Tailwind"]
    },
    {
      title: "CodeCrash",
      description:
        "A fast-paced coding platform where users solve coding challenges within 2 minutes. Built with Next.js 15+, Prisma, NenoDB via PostgreSQL, and Tailwind CSS.",
      image: codecrash,
      github: "https://github.com/Hari-hara7/code-crash.git",
      preview: "https://code-crash-8tel.vercel.app/",
      views: 500,
      tech: ["Next.js", "Prisma", "PostgreSQL"]
    },
    {
      title: "Beauty Parlour Management System",
      description:
        "A Beauty Parlour management website built with Vite, React, Firebase, Tailwind CSS, and TypeScript. Features include salon booking, feedback system, worker management, and money management.",
      image: mallannahair,
      github: "https://github.com/Hari-hara7/Mallanna-HairStyles.git",
      preview: "https://mallanna-hairstyles.com/",
      views: 500,
      tech: ["React", "Firebase", "TypeScript"]
    },
    {
      title: "CampusLeave",
      description:
        "A full-stack web app where students can apply for leave, and teachers/admins can view, accept, or reject requests. Built with the MERN stack, TailwindCSS, Vite, and TypeScript, offering a modern, clean UI.",
      image: campusleave,
      github: "https://github.com/Hari-hara7/CampusLeave.git",
      preview: "https://campus-leave-74sx.vercel.app/",
      views: 500,
      tech: ["MERN", "TypeScript", "Tailwind"]
    },
    {
      title: "Internship Manager",
      description:
        "A modern full-stack web application for managing student internships. Designed for teachers and administrators to efficiently view, update, and manage internship records, including certificate uploads.",
      image: intership,
      github: "https://github.com/Hari-hara7/internship-manager.git",
      preview: "https://internship-manager.vercel.app/",
      views: 450,
      tech: ["React", "Node.js", "Express"]
    },
    {
      title: "We4Tech Agency Website",
      description:
        "A professional agency website built with Vite, React, Axios, traditional CSS, and backend APIs.",
      image: project1Image,
      github: "https://github.com/Hari-hara7/we4tech-website-.git",
      preview: "https://we4tech.in/#/",
      views: 500,
      tech: ["React", "Vite", "CSS"]
    },
    {
      title: "Global Lane Website",
      description:
        "A premium agricultural imports and exports platform showcasing products like coffee beans, cardamom, and basmati rice.",
      image: project2Image,
      github: "https://github.com/global-lane",
      preview: "https://www.global-lane.com/",
      views: 500,
      tech: ["React", "Commerce", "API"]
    },
    {
      title: "Design Grid Website",
      description:
        "A platform for developers and designers to access resources like 3D models, backgrounds, and templates.",
      image: project3Image,
      github: "https://github.com/Hari-hara7/Design-grid.git",
      preview: "https://designgrid-two.vercel.app/",
      views: 550,
      tech: ["React", "UI/UX", "Resources"]
    },
    {
      title: "Skill Crafters",
      description:
        "A platform offering technology roadmaps with curated resources, built with a traditional stack.",
      image: project4Image,
      github: "https://github.com/Hari-hara7/skill-crafters-Website.git",
      preview: "https://skill-crafters.vercel.app/",
      views: 500,
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "ACM Club Website - NMAMIT",
      description:
        "The official website for the ACM club at NMAMIT, providing details about events, workshops, and resources.",
      image: project6Image,
      github: "https://github.com/Hari-hara7/ACM-Website2.git",
      preview: "https://acm-website2.vercel.app/",
      views: 500,
      tech: ["React", "Vite", "Tailwind"]
    },
    {
      title: "Epic Aikyam Quiz Website",
      description:
        "A dynamic quiz platform developed with React, Vite, Axios, and integrated APIs.",
      image: project7Image,
      github: "https://github.com/Hari-hara7/Aakyam.git",
      preview: "https://aakyam.vercel.app/",
      views: 500,
      tech: ["React", "API", "Quiz"]
    },
    {
      title: "Game Store",
      description:
        "An interactive and modern gaming marketplace that secured 1st place in the WebCraft competition. Features seamless navigation, latest game listings, and a sleek UI.",
      image: game,
      github: "https://github.com/Hari-hara7/Game-Store.git", 
      preview: "https://game-store-beryl.vercel.app/", 
      views: 850,
      featured: true,
      tech: ["React", "Gaming", "UI/UX"]
    },
  ]);

  const updateViewCount = (title: string) => {
    const updatedProjects = projects.map((project) => {
      if (project.title === title) {
        return { ...project, views: (project.views || 0) + 1 };
      }
      return project;
    });

    setProjects(updatedProjects);

    const updatedViews = updatedProjects.reduce((acc, project) => {
      acc[project.title] = project.views || 0;
      return acc;
    }, {} as Record<string, number>);
    localStorage.setItem("projectViews", JSON.stringify(updatedViews));
  };

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

  return (
    <section id="work" className="relative min-h-screen overflow-hidden bg-black">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
            Showcase of My Work 🚀
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron leading-tight mb-8"
              {...floatingAnimation}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                My Work
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Here are some projects I've worked on recently. Each project represents a unique challenge
            and showcases different technologies and creative solutions.
          </motion.p>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-Quattrocento"
          >
            {projects.map((project, index) => (
              <ScrollCard
                key={index}
                project={project}
                index={index}
                onClick={() => updateViewCount(project.title)}
                isHovered={hoveredCard === index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <Link
              to="/work"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 backdrop-blur-sm"
            >
              <FaCode className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              More Projects
              <HiSparkles className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ScrollCard = ({
  project,
  index,
  onClick,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  project: any;
  index: number;
  onClick: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ scale: 1.03, y: -5 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
        isHovered 
          ? "border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20" 
          : "border border-white/10 hover:border-cyan-500/50"
      } bg-black/40 backdrop-blur-sm hover:bg-black/60`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <FaStar className="mr-1" />
            Featured
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Tech Stack Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {project.tech?.slice(0, 3).map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
              >
                {tech}
              </span>
            ))}
            {project.tech?.length > 3 && (
              <span className="px-2 py-1 bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
            {project.title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm ml-2">
            <FaEye className="mr-1" />
            <span>{project.views || 0}</span>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/40"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt />
            Preview
          </a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default Work;
