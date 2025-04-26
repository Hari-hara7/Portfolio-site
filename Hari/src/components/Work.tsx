import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
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
import mallannahair from "../assets/mallanna.png";//Hari/src/assets/internship.png
import campusleave from '../assets/leave.png';
import intership from '../assets/internship.png';

const Work: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [projects, setProjects] = useState([
    {
      title: "Crypto Tracker",
      description:
        "A real-time cryptocurrency tracking platform utilizing the CoinGecko API to provide live market data, price updates, and historical trends.",
      image: crypto, // Replace with the actual image variable
      github: "https://github.com/Hari-hara7/Crypto.git", // Replace with actual GitHub repo link
      preview: "https://crypto-beta-five.vercel.app/", // Replace with actual deployment link
      views: 750, // Adjust as needed
    },
    {
      title: "Academic Pal",
      description:
        "A platform offering notes and resources for B.Tech students, organized by year and branch.",
      image: project5Image,
      github: "https://github.com/Hari-hara7/Academicpal--login.git",
      preview: "https://academicpal.in/",
      views: 500,
    },
    {
      title: "Anna Raksha",
      description:
        "A food donation and distribution platform connecting donors with NGOs and individuals in need, ensuring efficient food management and reducing waste.",
      image: annaraksha, // Replace with the actual image variable
      github: "https://github.com/Hari-hara7/anna-raksha.git", // Replace with actual GitHub repo link
      preview: "https://anna-raksha-bmu9.vercel.app/", // Replace with actual deployment link
      views: 620, // Adjust as needed
    },
    
    {
      title: "CodeCrash",
      description:
        "A fast-paced coding platform where users solve coding challenges within 2 minutes. Built with **Next.js 15+**, **Prisma**, **NenoDB via PostgreSQL**, and **Tailwind CSS**.",
      image: codecrash,
      github: "https://github.com/Hari-hara7/code-crash.git",
      preview: "https://code-crash-8tel.vercel.app/",
      views: 500,
    },
    {
      title: "Saloon shop Management System",
      description:
        "A salon management website built with **Vite**, **React**, **Firebase**, **Tailwind CSS**, and **TypeScript**. Features include salon booking, feedback system, worker management, and money management.",
      image: mallannahair,
      github: "https://github.com/Hari-hara7/Mallanna-HairStyles.git",
      preview: "https://mallanna-hairstyles.com/",
      views: 500,
    },
    {
      title: "CampusLeave",
      description:
        "A full-stack web app where students can apply for leave, and teachers/admins can view, accept, or reject requests. Built with the **MERN stack**, **TailwindCSS**, **Vite**, and **TypeScript**, offering a modern, clean UI.",
      image: campusleave,
      github: "https://github.com/Hari-hara7/CampusLeave.git",
      preview: "https://campus-leave-74sx.vercel.app/",
      views: 500,
    },
    {
      title: "Internship Manager",
      description:// intership
        "A modern full-stack web application for managing student internships. Designed for teachers and administrators to efficiently view, update, and manage internship records, including certificate uploads.",
        image:  intership,
        github: "https://github.com/Hari-hara7/internship-manager.git",
      preview: "https://internship-manager.vercel.app/",
    },
    {
      title: "We4Tech Agency Website",
      description:
        "A professional agency website built with Vite, React, Axios, traditional CSS, and backend APIs.",
      image: project1Image,
      github: "https://github.com/Hari-hara7/we4tech-website-.git",
      preview: "https://we4tech.in/#/",
      views: 500,
    },
    {
      title: "Global Lane Website",
      description:
        "A premium agricultural imports and exports platform showcasing products like coffee beans, cardamom, and basmati rice.",
      image: project2Image,
      github: "https://github.com/global-lane",
      preview: "https://www.global-lane.com/",
      views: 500,
    },
    {
      title: "Design Grid Website",
      description:
        "A platform for developers and designers to access resources like 3D models, backgrounds, and templates.",
      image: project3Image,
      github: "https://github.com/Hari-hara7/Design-grid.git",
      preview: "https://designgrid-two.vercel.app/",
      views: 550,
    },
    {
      title: "Skill Crafters",
      description:
        "A platform offering technology roadmaps with curated resources, built with a traditional stack.",
      image: project4Image,
      github: "https://github.com/Hari-hara7/skill-crafters-Website.git",
      preview: "https://skill-crafters.vercel.app/",
      views: 500,
    },
  
    {
      title: "ACM Club Website - NMAMIT",
      description:
        "The official website for the ACM club at NMAMIT, providing details about events, workshops, and resources.",
      image: project6Image,
      github: "https://github.com/Hari-hara7/ACM-Website2.git",
      preview: "https://acm-website2.vercel.app/",
      views: 500,
    },
    {
      title: "Epic Aikyam Quiz Website",
      description:
        "A dynamic quiz platform developed with React, Vite, Axios, and integrated APIs.",
      image: project7Image,
      github: "https://github.com/Hari-hara7/Aakyam.git",
      preview: "https://aakyam.vercel.app/",
      views: 500,
    },
    {
      title: "Game Store",
      description:
        "An interactive and modern gaming marketplace that secured 1st place in the WebCraft competition. Features seamless navigation, latest game listings, and a sleek UI.",
      image: game, // Replace with the actual image variable
      github: "https://github.com/Hari-hara7/Game-Store.git", // Replace with actual GitHub repo link
      preview: "https://game-store-beryl.vercel.app/", // Replace with actual deployment link
      views: 850, // Adjust as needed
    },
    
  ]);

  const updateViewCount = (title: string) => {
    const updatedProjects = projects.map((project) => {
      if (project.title === title) {
        return { ...project, views: project.views + 1 };
      }
      return project;
    });

    setProjects(updatedProjects);

    const updatedViews = updatedProjects.reduce((acc, project) => {
      acc[project.title] = project.views;
      return acc;
    }, {} as Record<string, number>);
    localStorage.setItem("projectViews", JSON.stringify(updatedViews));
  };

  return (
    <section id="work" className="bg-dark-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          Here are some projects I’ve worked on recently.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollCard
              key={index}
              project={project}
              onClick={() => updateViewCount(project.title)}
              isHovered={hoveredCard === index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <Link
            to="/work"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 hover:from-green-500 hover:to-cyan-500 text-white font-semibold text-lg shadow-lg transition-all duration-300"
          >
            More Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ScrollCard = ({
  project,
  onClick,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  project: any;
  onClick: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust this threshold as needed
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ x: -100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={`p-6 rounded-lg shadow-lg cursor-pointer ${
        isHovered ? "border-4 border-cyan-500 shadow-cyan-500" : "border border-gray-800"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gradient flex items-center justify-between">
        <span>{project.title}</span>
        <span className="flex items-center text-gray-400">
          <FaEye className="mr-1" />
          {project.views}
        </span>
      </h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="flex justify-between items-center mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-cyan-400 hover:underline"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={project.preview}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-cyan-400 hover:underline"
        >
          <FaExternalLinkAlt /> Preview
        </a>
      </div>
    </motion.div>
  );
};

export default Work;
