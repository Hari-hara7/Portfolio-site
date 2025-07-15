import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { motion } from 'framer-motion';

const ArchitectureVisualization: React.FC = () => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#06B6D4',
        primaryTextColor: '#F3F4F6',
        primaryBorderColor: '#374151',
        lineColor: '#6B7280',
        sectionBkgColor: '#1F2937',
        altSectionBkgColor: '#111827',
        gridColor: '#374151',
        tertiaryColor: '#1F2937',
        background: '#111827',
        mainBkg: '#1F2937',
        secondBkg: '#374151',
        tertiaryTextColor: '#9CA3AF'
      }
    });

    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = '';
      mermaid.render('architecture-diagram', architectureDiagram).then((result) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg;
        }
      });
    }
  }, []);

  const architectureDiagram = `
    graph TB
      subgraph "Frontend Layer"
        A[React + TypeScript] --> B[Tailwind CSS]
        A --> C[Framer Motion]
        A --> D[React Router]
        B --> E[Responsive UI]
        C --> F[Animations]
        D --> G[SPA Navigation]
      end
      
      subgraph "State Management"
        H[Context API] --> I[Local Storage]
        H --> J[Session Management]
      end
      
      subgraph "Backend Services"
        K[Node.js + Express] --> L[MongoDB]
        K --> M[Firebase]
        K --> N[REST APIs]
        L --> O[User Data]
        M --> P[Authentication]
        N --> Q[GraphQL]
      end
      
      subgraph "Development Tools"
        R[Vite] --> S[Hot Reload]
        R --> T[Build Optimization]
        U[ESLint] --> V[Code Quality]
        W[TypeScript] --> X[Type Safety]
      end
      
      subgraph "Deployment"
        Y[Vercel] --> Z[CDN]
        Y --> AA[Auto Deployment]
        BB[GitHub Actions] --> CC[CI/CD]
      end
      
      A --> H
      H --> K
      K --> Y
      R --> Y
      
      style A fill:#06B6D4
      style K fill:#10B981
      style Y fill:#8B5CF6
      style R fill:#F59E0B
  `;

  const fullStackDiagram = `
    flowchart LR
      subgraph "Client Side"
        A[User Interface] --> B[React Components]
        B --> C[State Management]
        C --> D[API Calls]
      end
      
      subgraph "Server Side"
        E[Express Server] --> F[Route Handlers]
        F --> G[Middleware]
        G --> H[Business Logic]
      end
      
      subgraph "Database"
        I[MongoDB] --> J[Collections]
        K[Firebase] --> L[Real-time DB]
      end
      
      subgraph "External Services"
        M[Authentication] --> N[JWT Tokens]
        O[File Storage] --> P[Cloud Storage]
        Q[Email Service] --> R[Notifications]
      end
      
      D --> E
      H --> I
      H --> K
      E --> M
      E --> O
      E --> Q
      
      style A fill:#06B6D4
      style E fill:#10B981
      style I fill:#F59E0B
      style M fill:#8B5CF6
  `;

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