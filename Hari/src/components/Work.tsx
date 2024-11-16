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
        title: "We4Tech Agency Website",
        description: "A professional agency website built with Vite, React, Axios, traditional CSS, and backend APIs.",
        image: project1Image, // Ensure this points to the correct image for We4Tech
        github: "https://github.com/example/we4tech-agency", // Update with the actual GitHub link
        preview: "#", // Update with the live preview link if available
      },
      
      {
        title: "Global Lane Website",
        description: "A premium agricultural imports and exports platform showcasing products like coffee beans, cardamom, and basmati rice. Built with HTML5, CSS3, Bootstrap, and integrated with Clerk.js for client authentication. Includes API-driven features for enhanced user experience.",
        image: project2Image, // Replace with the actual image variable or path
        github: "https://github.com/example/global-lane", // Update with the actual GitHub repo link
        preview: "https://global-lane-example.com", // Replace with the actual preview link if available
      },
      
      {
        title: "Design Grid Website",
        description: "A platform for developers and designers to access resources like 3D models, backgrounds, and templates. Built using GSAP and Three.js for dynamic animations and immersive 3D experiences, offering a modern and engaging interface.",
        image: project3Image, // Replace with the actual image variable or path
        github: "https://github.com/example/design-grid", // Update with the actual GitHub repo link
        preview: "https://design-grid-example.com", // Replace with the actual live link if deployed
      },
      
      {
        title: "Skill Crafters",
        description: "A platform offering technology roadmaps with curated resources, built with a traditional stack.",
        image: project4Image, // Ensure this points to the correct image for Skill Crafters
        github: "https://github.com/example/skill-crafters", // Update with the actual GitHub link
        preview: "#", // Update with the live preview link if available
      },
      
      {
        title: "Academic Pal",
        description: "A platform offering notes and resources for B.Tech students, organized by year and branch. Built using HTML5, CSS3, JavaScript, and jQuery, with multiple API integrations to enhance functionality and provide seamless access to educational content.",
        image: project5Image, // Replace with the actual image variable or path
        github: "https://github.com/example/academic-pal", // Update with the actual GitHub repo link
        preview: "https://academic-pal-example.com", // Replace with the actual preview link if deployed
      },
      
      {
        title: "ACM Club Website - NMAMIT",
        description: "The official website for the ACM club at NMAMIT, providing details about events, workshops, and resources. Built to streamline communication and registration for club activities with an intuitive user interface.",
        image: project6Image, // Replace with the actual image variable or path
        github: "https://github.com/example/acm-club", // Update with the actual GitHub repository link
        preview: "https://acm-nmamit-club-example.com", // Replace with the live preview link if deployed
      },
      
      {
        title: "Epic Aikyam Quiz Website",
        description: "A dynamic quiz platform developed with React, Vite, Axios, and integrated APIs. Designed for an engaging and interactive quiz experience with seamless data handling and real-time updates.",
        image: project7Image, // Replace with the actual image variable or path
        github: "https://github.com/example/epic-aikyam-quiz", // Update with the actual GitHub repository link
        preview: "https://epic-aikyam-quiz-example.com", // Replace with the live preview link if deployed
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
