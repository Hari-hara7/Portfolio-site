import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import images from assets
import project1Image from "../assets/we4tech.jpg";
import project2Image from "../assets/globallane.jpg";
import project3Image from "../assets/designgrid-BoOHbFyy.jpg";
import project4Image from "../assets/skillcrafters.jpg";
import project5Image from "../assets/academicpal.png";
import project6Image from "../assets/acm.jpg";
import project7Image from "../assets/aikyam1.png";

const Work: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [projects, setProjects] = useState([
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
      title: "Academic Pal",
      description:
        "A platform offering notes and resources for B.Tech students, organized by year and branch.",
      image: project5Image,
      github: "https://github.com/Hari-hara7/Academicpal--login.git",
      preview: "https://academicpal.in/",
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
  ]);

  // Load view counts from localStorage
  useEffect(() => {
    const storedViews = JSON.parse(localStorage.getItem("projectViews") || "{}");
    setProjects((prevProjects) =>
      prevProjects.map((project) => ({
        ...project,
        views: storedViews[project.title] || project.views,
      }))
    );
  }, []);

  // Update the view count in localStorage
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
    }, {});
    localStorage.setItem("projectViews", JSON.stringify(updatedViews));
  };

  return (
    <section id="work" className="bg-dark-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Work
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          Here are some projects I’ve worked on recently.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-6 rounded-lg shadow-lg cursor-pointer ${
                hoveredCard === index
                  ? "border-4 border-cyan-500 shadow-cyan-500"
                  : "border border-gray-800"
              }`}
              onClick={() => updateViewCount(project.title)}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gradient flex items-center justify-between">
                <span>{project.title}</span>
                <span className="flex items-center text-gray-400">
                  <FaEye className="mr-1" />
                  {project.views}
                </span>
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 mt-2">{project.description}</p>

              {/* GitHub and Preview Links */}
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
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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

export default Work;
