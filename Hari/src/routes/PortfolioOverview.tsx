import React from 'react';
import { FaReact,  FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiTypescript, SiVite, SiFirebase, SiVercel, } from 'react-icons/si';
import { motion } from 'framer-motion';

import { FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioOverview: React.FC = () => {
  return (
    <section id="portfolio-overview" className="bg-dark-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text mt-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Portfolio Overview
        </motion.h2>

        {/* Tech Stack */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">
            Tech Stack Used
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div>
              <FaReact className="text-cyan-400 text-5xl mx-auto" />
              <p className="mt-2">React</p>
            </div>
            <div>
              <SiVite className="text-white text-5xl mx-auto" />
              <p className="mt-2">Vite</p>
            </div>
            <div>
              <SiTypescript className="text-blue-500 text-5xl mx-auto" />
              <p className="mt-2">TypeScript</p>
            </div>
            <div>
              <SiTailwindcss className="text-cyan-500 text-5xl mx-auto" />
              <p className="mt-2">TailwindCSS</p>
            </div>
            <div>
              <SiFramer className="text-pink-400 text-5xl mx-auto" />
              <p className="mt-2">Framer Motion</p>
            </div>
            <div>
              <SiFirebase className="text-yellow-500 text-5xl mx-auto" />
              <p className="mt-2">Firebase</p>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-gradient bg-gradient-to-r from-purple-500 to-pink-500">
            Deployment
          </h3>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-medium mb-4">Where It's Deployed</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {/* GitHub Icon */}
              <div>
                <FaGithub className="text-gray-300 text-5xl mx-auto" />
                <p className="mt-2">GitHub</p>
              </div>

              {/* Git Icon */}
              <div>
                <FaGitAlt className="text-gray-300 text-5xl mx-auto" />
                <p className="mt-2">Git</p>
              </div>

              {/* Vercel Icon */}
              <div>
                < SiVercel className="text-black text-5xl mx-auto" />
                <p className="mt-2">Vercel</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              The code for this portfolio is stored in a GitHub repository, and version control is managed via Git. The site is deployed on Vercel for optimal performance and scalability.
            </p>
          </div>
        </div>

        {/* Performance Report */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-gradient bg-gradient-to-r from-yellow-500 to-red-500">
            Performance Report
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Core Web Vitals */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium mb-4">Core Web Vitals</h4>
              <ul className="space-y-2">
                <li>LCP (Largest Contentful Paint): <span className="text-green-400">1.8s</span></li>
                <li>FID (First Input Delay): <span className="text-green-400">Less than 100ms</span></li>
                <li>CLS (Cumulative Layout Shift): <span className="text-green-400">0.01</span></li>
              </ul>
            </div>

            {/* Lighthouse Scores */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium mb-4">Lighthouse Scores</h4>
              <ul className="space-y-2">
                <li>Performance: <span className="text-green-400">95%</span></li>
                <li>Accessibility: <span className="text-green-400">100%</span></li>
                <li>SEO: <span className="text-green-400">98%</span></li>
                <li>Best Practices: <span className="text-green-400">97%</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Repository Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-gradient bg-gradient-to-r from-purple-500 to-pink-500">
            About This Repository
          </h3>
          <p className="text-gray-300">
            This portfolio is a showcase of my skills, projects, and achievements. It’s built with a focus on performance, accessibility, and a smooth user experience. The source code is open and available for review.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-300">
            <li>Interactive UI with animations powered by Framer Motion.</li>
            <li>Optimized for SEO and performance using Lighthouse recommendations.</li>
            <li>Responsive design using TailwindCSS for a modern, mobile-first approach.</li>
            <li>Deployed on Vercel for fast, scalable hosting.</li>
          </ul>
          <div className="flex gap-6 mt-4 justify-center">
            <a
              href="https://github.com/Hari-hara7/Portfolio-site.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
            >
              <FaGithub className="mr-2" />
              GitHub Repo
            </a>
            <a
              href="https://hariharanath.is-cod.in/"
              target="_blank"
              rel="noopener noreferrer"
               className="flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-md hover:from-indigo-500 hover:to-teal-500 transition duration-300 ease-in-out"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;
