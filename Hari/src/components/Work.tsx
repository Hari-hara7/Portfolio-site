import React from "react";
import { motion } from "framer-motion";

const Work: React.FC = () => {
  // Example projects (replace with your data)
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern and responsive portfolio built with React and TailwindCSS.",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "An online store featuring real-time payment integration and a sleek UI.",
      link: "#",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app powered by OpenWeatherMap API.",
      link: "#",
    },
  ];

  return (
    <section id="work" className="bg-bg text-white py-16 px-6 md:px-12">
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gradient">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400 hover:underline"
              >
                View Project &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
