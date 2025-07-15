import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaDownload, FaEye } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

const AboutRepository: React.FC = () => {
  const [repoStats, setRepoStats] = useState({
    stars: 12,
    forks: 8,
    commits: 156,
    contributors: 3,
    size: '2.4 MB',
    language: 'TypeScript',
    lastUpdate: '2025-01-15'
  });

  const [deploymentStats, setDeploymentStats] = useState({
    totalVisitors: '3,847',
    monthlyVisitors: '1,234',
    averageSessionTime: '4:32',
    bounceRate: '23%',
    performance: 98
  });

  const techStack = [
    { name: 'React 18', category: 'Frontend', color: '#61DAFB' },
    { name: 'TypeScript', category: 'Language', color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'Styling', color: '#38B2AC' },
    { name: 'Framer Motion', category: 'Animation', color: '#0055FF' },
    { name: 'Vite', category: 'Build Tool', color: '#646CFF' },
    { name: 'Firebase', category: 'Backend', color: '#FFCA28' },
    { name: 'Vercel', category: 'Deployment', color: '#000000' }
  ];

  const features = [
    {
      icon: <FaCode />,
      title: 'Modern Tech Stack',
      description: 'Built with latest React 18, TypeScript, and modern development tools for optimal performance.'
    },
    {
      icon: <FaEye />,
      title: 'Interactive Visualizations',
      description: 'Advanced charts, graphs, and interactive components using Chart.js and custom animations.'
    },
    {
      icon: <FaStar />,
      title: 'Responsive Design',
      description: 'Fully responsive design that works seamlessly across all devices and screen sizes.'
    },
    {
      icon: <FaDownload />,
      title: 'Fast Performance',
      description: 'Optimized for speed with lazy loading, code splitting, and efficient asset management.'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            About This Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A modern, interactive portfolio showcasing advanced web development skills with cutting-edge technologies and beautiful design.
          </p>
        </motion.div>

        {/* Repository Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12"
        >
          {Object.entries(repoStats).map(([key, value], index) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center"
            >
              <div className="text-2xl font-bold text-cyan-400">{value}</div>
              <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.a
            href="https://github.com/Hari-hara7/Portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600 hover:border-cyan-400 transition-all duration-300 group"
          >
            <FaGithub className="text-2xl group-hover:text-cyan-400 transition-colors" />
            <div>
              <div className="font-semibold">View Source Code</div>
              <div className="text-sm text-gray-400">Explore the repository</div>
            </div>
          </motion.a>

          <motion.a
            href={window.location.origin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 group"
          >
            <FaExternalLinkAlt className="text-2xl group-hover:scale-110 transition-transform" />
            <div>
              <div className="font-semibold">Live Demo</div>
              <div className="text-sm text-cyan-100">Visit the live site</div>
            </div>
          </motion.a>

          <motion.a
            href="https://vercel.com/deploy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group"
          >
            <SiVercel className="text-2xl group-hover:scale-110 transition-transform" />
            <div>
              <div className="font-semibold">Deploy Your Own</div>
              <div className="text-sm text-purple-100">One-click deployment</div>
            </div>
          </motion.a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Built With Modern Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 border border-white/10 flex items-center gap-2"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-sm font-medium">{tech.name}</span>
                <span className="text-xs text-gray-400">({tech.category})</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <div className="text-3xl text-cyan-400 mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Deployment & Performance Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Live Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.entries(deploymentStats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  {value}
                </div>
                <div className="text-sm text-gray-400 capitalize mt-1">
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Performance Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Overall Performance Score</span>
              <span className="text-sm font-bold text-green-400">{deploymentStats.performance}/100</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${deploymentStats.performance}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-gradient-to-r from-green-400 to-cyan-500 h-2 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutRepository;