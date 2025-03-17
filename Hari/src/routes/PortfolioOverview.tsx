import React from 'react';
import { FaReact,  FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiTypescript, SiVite, SiFirebase, SiVercel, } from 'react-icons/si';
import { SiExpress, SiPostgresql, SiPrisma, SiGraphql, SiApollographql, SiNodedotjs, SiNodemon,SiJavascript,SiRender } from "react-icons/si";
import { motion } from 'framer-motion';
import { ScrollProgress } from "../components/magicui/scroll-progress";

import { BorderBeam } from "../components/magicui/border-beam";


import { FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioOverview: React.FC = () => {
  return (
    <section id="portfolio-overview" className="bg-dark-900 text-white py-16 px-6">
        <ScrollProgress className="fixed top-0 left-0 w-full h-1 bg-cyan-500 z-50" />
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
            <div>
      <SiJavascript className="text-yellow-400 text-6xl mx-auto" />
      <p className="mt-2">JavaScript</p>
    </div>
            <div>
            <SiNodedotjs className="text-green-500 text-6xl mx-auto" />
            <p className="mt-2">Node.js</p>
          </div>
          <div>
            <SiExpress className="text-gray-300 text-6xl mx-auto" />
            <p className="mt-2">Express.js</p>
          </div>
          <div>
            <SiPostgresql className="text-blue-500 text-6xl mx-auto" />
            <p className="mt-2">PostgreSQL</p>
          </div>
          <div>
            <SiPrisma className="text-gray-500 text-6xl mx-auto" />
            <p className="mt-2">Prisma</p>
          </div>
          <div>
            <SiGraphql className="text-pink-500 text-6xl mx-auto" />
            <p className="mt-2">GraphQL</p>
          </div>
          <div>
            <SiApollographql className="text-purple-400 text-6xl mx-auto" />
            <p className="mt-2">Apollo Server</p>
          </div>
          <div>
            <SiPostgresql className="text-blue-400 text-6xl mx-auto" />
            <p className="mt-2">Neon DB</p>
          </div>
          <div>
            <SiNodedotjs className="text-green-400 text-6xl mx-auto" />
            <p className="mt-2">Node.js</p>
          </div>
          <div>
            <SiNodemon className="text-green-500 text-6xl mx-auto" />
            <p className="mt-2">Nodemon</p>
          </div>
          </div>
        </div>
        <div className="space-y-6 mt-16 flex flex-col items-center">
      <h3 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Deployment
      </h3>
      <div className="relative w-full max-w-3xl p-[1px] rounded-lg overflow-hidden">
        {/* BorderBeam effect */}
        <BorderBeam duration={8} size={400} />
        <div className="relative bg-dark-800 p-6 rounded-lg shadow-lg border border-gray-600">
          <h4 className="text-xl font-medium mb-4 text-white">Where It's Deployed</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {/* GitHub Icon */}
            <div>
              <FaGithub className="text-gray-300 text-6xl mx-auto" />
              <p className="mt-2 text-white">GitHub</p>
            </div>

            {/* Git Icon */}
            <div>
              <FaGitAlt className="text-gray-300 text-6xl mx-auto" />
              <p className="mt-2 text-white">Git</p>
            </div>

            {/* Vercel Icon */}
            <div>
              <SiVercel className="text-white text-6xl mx-auto" />
              <p className="mt-2 text-white">Vercel</p>
            </div>

            {/* Render Icon */}
            <div>
              <SiRender className="text-white text-6xl mx-auto" />
              <p className="mt-2 text-white">Render</p>  
            </div>
          </div>
          <p className="mt-4 text-gray-300">
            The frontend is deployed on Vercel, while the backend is hosted on Render for reliable server-side execution. Git is used for version control, and GitHub stores the code.
          </p>
        </div>
      </div>
    </div>
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
        Performance Report
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Core Web Vitals */}
        <div className="relative p-[1px] rounded-lg overflow-hidden">
          <BorderBeam duration={8} size={200} />
          <div className="relative bg-dark-800 p-10 rounded-lg shadow-lg border border-gray-600">
            <h4 className="text-xl font-medium mb-4 text-white">Core Web Vitals</h4>
            <ul className="space-y-2 text-white">
              <li>LCP (Largest Contentful Paint): <span className="text-green-400">1.8s</span></li>
              <li>FID (First Input Delay): <span className="text-green-400">Less than 100ms</span></li>
              <li>CLS (Cumulative Layout Shift): <span className="text-green-400">0.01</span></li>
            </ul>
          </div>
        </div>

        {/* Lighthouse Scores */}
        <div className="relative p-[1px] rounded-lg overflow-hidden">
          <BorderBeam duration={8} size={100} />
          <div className="relative bg-dark-800 p-6 rounded-lg shadow-lg border border-gray-600">
            <h4 className="text-xl font-medium mb-4 text-white">Lighthouse Scores</h4>
            <ul className="space-y-2 text-white">
              <li>Performance: <span className="text-green-400">95%</span></li>
              <li>Accessibility: <span className="text-green-400">100%</span></li>
              <li>SEO: <span className="text-green-400">98%</span></li>
              <li>Best Practices: <span className="text-green-400">97%</span></li>
            </ul>
          </div>
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
