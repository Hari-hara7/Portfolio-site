import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';

const skillData = [
  {
    skill: 'React',
    proficiency: 92,
    experience: 85,
    projects: 90
  },
  {
    skill: 'TypeScript',
    proficiency: 89,
    experience: 82,
    projects: 85
  },
  {
    skill: 'Node.js',
    proficiency: 85,
    experience: 78,
    projects: 80
  },
  {
    skill: 'MongoDB',
    proficiency: 88,
    experience: 75,
    projects: 82
  },
  {
    skill: 'Tailwind',
    proficiency: 95,
    experience: 90,
    projects: 93
  },
  {
    skill: 'Next.js',
    proficiency: 88,
    experience: 80,
    projects: 85
  }
];

const SkillsRadar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
        Skills Assessment Radar
      </h3>
      
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={skillData}>
            <PolarGrid 
              gridType="polygon" 
              stroke="#374151" 
              strokeWidth={1}
            />
            <PolarAngleAxis 
              dataKey="skill" 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              className="text-gray-400"
            />
            <PolarRadiusAxis 
              angle={0} 
              domain={[0, 100]} 
              tick={{ fill: '#6B7280', fontSize: 10 }}
              tickCount={6}
            />
            <Radar
              name="Proficiency"
              dataKey="proficiency"
              stroke="#06B6D4"
              fill="#06B6D4"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Experience"
              dataKey="experience"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Projects"
              dataKey="projects"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Legend 
              wrapperStyle={{ color: '#9CA3AF', fontSize: '14px' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SkillsRadar;