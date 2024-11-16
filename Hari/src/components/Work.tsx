import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import images from assets
import project1Image from "../assets/we4tech.jpg";
import project2Image from "../assets/globallane.jpg";
import project3Image from "../assets/designgrid-BoOHbFyy.jpg";
import project4Image from "../assets/skillcrafters.jpg";
import project5Image from "../assets/academicpal.png";
import project6Image from "../assets/acm.jpg";
import project7Image from "../assets/aikyam1.png";

const Work: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern and responsive portfolio built with React and TailwindCSS.",
      image: project1Image,
      github: "https://github.com/example/portfolio",
      preview: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "An online store featuring real-time payment integration and a sleek UI.",
      image: project2Image,
      github: "https://github.com/example/ecommerce",
      preview: "#",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app powered by OpenWeatherMap API.",
      image: project3Image,
      github: "https://github.com/example/weather-app",
      preview: "#",
    },
    {
      title: "Task Manager",
      description: "A task management app with drag-and-drop functionality.",
      image: project4Image,
      github: "https://github.com/example/task-manager",
      preview: "#",
    },
    {
      title: "Blog CMS",
      description: "A content management system for creating and managing blogs.",
      image: project5Image,
      github: "https://github.com/example/blog-cms",
      preview: "#",
    },
    {
      title: "Social Media App",
      description: "A social networking platform with real-time chat features.",
      image: project6Image,
      github: "https://github.com/example/social-media-app",
      preview: "#",
    },
    {
      title: "Finance Tracker",
      description: "A finance tracker to manage expenses and incomes effectively.",
      image: project7Image,
      github: "https://github.com/example/finance-tracker",
      preview: "#",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gradient">{project.title}</h3>

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
          <button
            onClick={() => (window.location.href = "/Work")}
            className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg shadow-lg"
          >
            More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
