import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const ProjectStatsCharts: React.FC = () => {
  // Technology Usage Data
  const techData = {
    labels: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Next.js', 'Firebase'],
    datasets: [
      {
        label: 'Projects Using Technology',
        data: [15, 12, 8, 6, 5, 4],
        backgroundColor: [
          'rgba(6, 182, 212, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(168, 85, 247, 0.8)'
        ],
        borderColor: [
          'rgba(6, 182, 212, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(168, 85, 247, 1)'
        ],
        borderWidth: 2,
      },
    ],
  };

  // Project Completion Timeline
  const timelineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Projects Completed',
        data: [1, 2, 3, 2, 4, 3, 2],
        borderColor: 'rgba(6, 182, 212, 1)',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Project Types Distribution
  const projectTypesData = {
    labels: ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'Desktop'],
    datasets: [
      {
        data: [45, 30, 15, 7, 3],
        backgroundColor: [
          'rgba(6, 182, 212, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderColor: [
          'rgba(6, 182, 212, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)'
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#9CA3AF',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#F3F4F6',
        bodyColor: '#D1D5DB',
        borderColor: 'rgba(6, 182, 212, 0.5)',
        borderWidth: 1,
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11
          }
        },
        grid: {
          color: 'rgba(75, 85, 99, 0.3)'
        }
      },
      y: {
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11
          }
        },
        grid: {
          color: 'rgba(75, 85, 99, 0.3)'
        }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#9CA3AF',
          font: {
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        titleColor: '#F3F4F6',
        bodyColor: '#D1D5DB',
        borderColor: 'rgba(6, 182, 212, 0.5)',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {/* Technology Usage Chart */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 col-span-1 lg:col-span-2"
      >
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Technology Usage in Projects
        </h3>
        <div className="h-64">
          <Bar data={techData} options={chartOptions} />
        </div>
      </motion.div>

      {/* Project Types Distribution */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      >
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Project Types
        </h3>
        <div className="h-64">
          <Doughnut data={projectTypesData} options={doughnutOptions} />
        </div>
      </motion.div>

      {/* Project Timeline */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 col-span-1 lg:col-span-2 xl:col-span-3"
      >
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Project Completion Timeline (2024)
        </h3>
        <div className="h-64">
          <Line data={timelineData} options={chartOptions} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectStatsCharts;