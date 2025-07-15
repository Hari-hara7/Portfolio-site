import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaEye, FaStar, FaCode, FaCalendar, FaUsers } from 'react-icons/fa';
import { SiReact, SiTypescript, SiTailwindcss, SiFirebase, SiVercel, SiMongodb, SiNodedotjs } from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  github: string;
  preview: string;
  views: number;
  technologies: string[];
  features: string[];
  challenges: string[];
  completionDate: string;
  teamSize: number;
  githubStats?: {
    stars: number;
    forks: number;
    commits: number;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    'React': <SiReact className="text-blue-400" />,
    'TypeScript': <SiTypescript className="text-blue-600" />,
    'Tailwind': <SiTailwindcss className="text-teal-400" />,
    'Firebase': <SiFirebase className="text-orange-400" />,
    'Vercel': <SiVercel className="text-white" />,
    'MongoDB': <SiMongodb className="text-green-500" />,
    'Node.js': <SiNodedotjs className="text-green-600" />,
    'Next.js': <SiVercel className="text-white" />
  };
  return iconMap[tech] || <FaCode className="text-gray-400" />;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'stats', label: 'Statistics' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <FaTimes />
              </button>

              <div className="absolute bottom-4 left-6">
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{project.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendar />
                    <span>{project.completionDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUsers />
                    <span>{project.teamSize} member{project.teamSize > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FaGithub />
                  View Code
                </motion.a>
                
                <motion.a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </motion.a>

                {project.githubStats && (
                  <div className="flex items-center gap-4 ml-auto">
                    <div className="flex items-center gap-1 text-gray-400">
                      <FaStar className="text-yellow-400" />
                      <span>{project.githubStats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <FaCode />
                      <span>{project.githubStats.commits} commits</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10"
                    >
                      {getTechIcon(tech)}
                      <span className="text-sm text-gray-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-6">
                <div className="flex border-b border-gray-700 mb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-cyan-400 text-cyan-400'
                          : 'border-transparent text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'overview' && (
                      <div className="text-gray-300">
                        <p className="mb-4">{project.longDescription}</p>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    )}

                    {activeTab === 'features' && (
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'challenges' && (
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technical Challenges</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                              <span>{challenge}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === 'stats' && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400">{project.views}</div>
                          <div className="text-sm text-gray-400">Total Views</div>
                        </div>
                        {project.githubStats && (
                          <>
                            <div className="bg-white/5 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-yellow-400">{project.githubStats.stars}</div>
                              <div className="text-sm text-gray-400">GitHub Stars</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-green-400">{project.githubStats.forks}</div>
                              <div className="text-sm text-gray-400">Forks</div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-purple-400">{project.githubStats.commits}</div>
                              <div className="text-sm text-gray-400">Commits</div>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;