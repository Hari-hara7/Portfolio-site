import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import Images
import project1 from '../assets/we4techh.png';

import project2 from '../assets/acm.jpg';
import project3 from '../assets/aikyam1.png';
import project4 from '../assets/globallane.jpg';

import project5 from '../assets/designgrid-BoOHbFyy.jpg';
import  project6 from '../assets/skillcrafters.jpg';
import project7 from '../assets/academicpal.png';
import project8 from '../assets/academic2.0-CsQA-9Rp.jpg';
import project9 from '../assets/hari.png';
import project10 from '../assets/amar.png';
import project11 from '../assets/bharath.png';
import project12 from '../assets/chandras.png';
import project13 from '../assets/abhinav.png';
import project14 from '../assets/mahendra.png';
import project15 from '../assets/dinesh.png';
import project16 from '../assets/achyuth.png';
import project17 from '../assets/kiran.png';
import project18 from '../assets/devisri.png';
import project19 from '../assets/gurucharan.png';
import project20 from '../assets/achuthan.png';
import project21 from '../assets/srinath.png';
import project22 from '../assets/dheepesh.png';
import project23 from '../assets/manojh.png';


const projects = [
  {
    title: 'We4Tech Agency',
    description:
      'Showcased services built with React, Vite, Framer Motion, CSS, Basin APIs, and Axios.',
    github: 'https://github.com/Hari-hara7/we4tech-website-.git',
    livePreview: 'https://we4tech.in/#/',
    image: project1,
  },
  {
    title: 'ACM Club Website',
    description:
      'Official website for the ACM Club built with React, Vite, Framer Motion, CSS, Basin APIs, and Axios.',
    github: 'https://github.com/Hari-hara7/ACM-Website2.git',
    livePreview: 'https://acm-website2.vercel.app/',
    image: project2,
  },
  {
    title: 'Aikyam Quiz Website',
    description:
      'Fully secured quiz platform built with React, Vite, CSS, Axios, Framer Motion, and Basin APIs.',
    github: 'https://github.com/Hari-hara7/Aakyam.git',
    livePreview: 'https://aakyam.vercel.app/',
    image: project3,
  },
  {
    title: 'Global Lane Website',
    description:
      'Freelance project for importing/exporting agriculture products. Built with Bootstrap, HTML, CSS, JS, jQuery, and ClerkJS.',
    github: 'https://github.com/global-lane',
    livePreview: 'https://www.global-lane.com/',
    image: project4 ,
  },
  {
    title: 'Design Grid',
    description:
      'Website offering 3D and pattern designs, built with GSAP and Three.js.',
    github: 'https://github.com/Hari-hara7/Design-grid.git',
    livePreview: 'https://designgrid-two.vercel.app/',
    image: project5,
  },
  {
    title: 'Skill Crafters',
    description:
      'Roadmaps for different technologies, a premium site built with HTML, CSS, JS, and jQuery.',
    github: 'https://github.com/Hari-hara7/skill-crafters-Website.git',
    livePreview: 'https://skill-crafters.vercel.app/',
    image: project6,
  },
  {
    title: 'Academic Pal 1.0',
    description:
      'Resource hub for B.Tech students at NMAMIT, built with HTML, CSS, JS, jQuery, ClerkJS, and Basin APIs.',
    github: 'https://github.com/Hari-hara7/Academicpal--login.git',
    livePreview: 'https://academicpal.in/',
    image: project7,
  },
  {
    title: 'Academic Pal 2.0',
    description:
      'Redesigned Academic Pal with advanced UI, GSAP animations, and Three.js integrations.',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://academic-pal-v9t9.onrender.com/',
    image: project8,
  },
  {
    title: 'Hari',
    description: 'Built with HTML, CSS, JS ',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://hari-portfolio-one.vercel.app/',
    image: project9,
  },
  {
    title: 'Amar Nadh Freelancing Website',
    description: 'Built with HTML, CSS, Bootstrap, JS for a for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://amar-nadh.vercel.app/',
    image: project10,
  },
  {
    title: 'Bharath Yallale Freelancing Portfolio',
    description: 'Built with Bootstrap, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://y-bharath.vercel.app/',
    image: project11,
  },
  {
    title: 'Chandraas Freelancing Portfolio',
    description: 'Built with HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://chandrahaas.vercel.app/',
    image: project12,
  },
  {
    title: 'Abhinav Reddy Freelancing Portfolio',
    description: 'Built with HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://abhinavreddyportfolio.vercel.app/',
    image:  project13,
  },
  {
    title: 'Mahendra Varma Freelancing Portfolio',
    description: 'Built with HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://mahendra-portfolio-five.vercel.app/',
    image: project14,
  },
  {
    title: 'Dinesh Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://l-dinesh.vercel.app/',
    image: project15,
  },
  {
    title: 'Achyuth Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://achyuth-zeta.vercel.app/',
    image: project16,
  },
  {
    title: 'Kiran Freelancing Portfolio',
    description: 'Built with Tailwind CSS, HTML, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://r-kiran.vercel.app/',
    image: project17,
  },
  {
    title: 'Devi Sri Prasad Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://devi-sri-prasad.vercel.app/',
    image: project18,
  },
  {
    title: 'Guru Charan Freelancing Portfolio',
    description: 'Built with Bootstrap, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://s-guru-charan.vercel.app/',
    image: project19,
  },
  {
    title: 'Achuthans Freelancing Portfolio',
    description: 'Built with Bootstrap, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://achuthan.vercel.app/',
    image: project20,
  },
  {
    title: 'Srinath Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://srinath.vercel.app/',
    image: project21,
  },
  {
    title: 'Dheepesh Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://dheepesh.vercel.app/',
    image:project22,
  },
  {
    title: 'Manojh Freelancing Portfolio',
    description: 'Built with Bootstrap, HTML, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://manojh-s.vercel.app/',
    image: project23,
  },
];

const Work: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        {/* Loader Spinner */}
        <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-800 border-b-4 border-gray-200"></div>
      </div>
    );
  }
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 lg:px-16 text-white">

      {/* Glowing Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse w-[300px] h-[300px] bg-cyan-500 blur-3xl opacity-20 rounded-full top-[-100px] left-[20%] absolute"></div>
        <div className="animate-pulse w-[400px] h-[400px] bg-green-500 blur-3xl opacity-20 rounded-full bottom-[-100px] right-[20%] absolute"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto ">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mt-12">
  My Projects
</h2>

        <p className="text-lg mt-4 text-gray-300 text-center max-w-2xl mx-auto">
          Explore some of my latest professional and personal projects crafted with passion and cutting-edge technologies.
        </p>

        {/* Project Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group bg-opacity-80 bg-gradient-to-r from-cyan-500 to-green-400 rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>

                  {/* Description */}
                  <p className="mt-2 text-gray-300 text-sm">{project.description}</p>

                  {/* Buttons */}
                  <div className="mt-4 flex items-center space-x-4">
                    {/* GitHub Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-800 bg-gradient-to-r from-cyan-400 to-green-400 rounded-md shadow-md hover:scale-105 transition-transform"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>

                    {/* Live Preview Button */}
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-800 bg-gradient-to-r from-green-400 to-cyan-400 rounded-md shadow-md hover:scale-105 transition-transform"
                    >
                      <FaExternalLinkAlt />
                      <span>Preview</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
