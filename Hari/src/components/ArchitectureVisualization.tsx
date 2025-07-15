import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ArchitectureVisualization: React.FC = () => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fallback diagram without mermaid for now
    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = `
        <div class="text-center text-gray-300">
          <p>Architecture Diagram Loading...</p>
          <p class="text-sm mt-2">Mermaid diagram will be rendered here</p>
        </div>
      `;
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Main Architecture Diagram */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      >
        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Full Stack Architecture Overview
        </h3>
        <div 
          ref={mermaidRef} 
          className="mermaid-container flex justify-center items-center min-h-[400px] text-gray-300"
        />
      </motion.div>

      {/* Tech Stack Visual */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      >
        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Technology Stack Layers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30"
          >
            <h4 className="text-lg font-bold text-cyan-400 mb-3">Frontend</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• React 18 + TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Framer Motion</li>
              <li>• Vite Build Tool</li>
              <li>• React Router</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30"
          >
            <h4 className="text-lg font-bold text-green-400 mb-3">Backend</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Node.js + Express</li>
              <li>• GraphQL + Apollo</li>
              <li>• JWT Authentication</li>
              <li>• RESTful APIs</li>
              <li>• Middleware Stack</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30"
          >
            <h4 className="text-lg font-bold text-purple-400 mb-3">Database & Cloud</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• MongoDB Atlas</li>
              <li>• Firebase</li>
              <li>• Vercel Deployment</li>
              <li>• GitHub Actions CI/CD</li>
              <li>• Cloud Storage</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArchitectureVisualization;