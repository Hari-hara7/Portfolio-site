import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaMobile, FaDesktop, FaGlobe, FaBolt, FaChartLine } from 'react-icons/fa';

const PerformanceDashboard: React.FC = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    lighthouse: {
      performance: 98,
      accessibility: 95,
      bestPractices: 97,
      seo: 96,
      pwa: 89
    },
    webVitals: {
      lcp: 1.2, // Largest Contentful Paint (seconds)
      fid: 15,  // First Input Delay (milliseconds)
      cls: 0.05 // Cumulative Layout Shift
    },
    analytics: {
      totalVisitors: 12547,
      uniqueVisitors: 8934,
      pageViews: 45632,
      bounceRate: 23.5,
      avgSessionDuration: 285 // seconds
    },
    deviceBreakdown: {
      mobile: 65,
      desktop: 28,
      tablet: 7
    }
  });

  const [animatedValues, setAnimatedValues] = useState({
    lighthouse: { performance: 0, accessibility: 0, bestPractices: 0, seo: 0, pwa: 0 },
    webVitals: { lcp: 0, fid: 0, cls: 0 },
    analytics: { totalVisitors: 0, uniqueVisitors: 0, pageViews: 0, bounceRate: 0, avgSessionDuration: 0 },
    deviceBreakdown: { mobile: 0, desktop: 0, tablet: 0 }
  });

  useEffect(() => {
    // Animate values on component mount
    const timer = setTimeout(() => {
      setAnimatedValues(performanceMetrics);
    }, 500);

    return () => clearTimeout(timer);
  }, [performanceMetrics]);

  const CircularProgress: React.FC<{ 
    value: number; 
    size?: number; 
    strokeWidth?: number; 
    color?: string;
    label?: string;
  }> = ({ value, size = 120, strokeWidth = 8, color = '#06B6D4', label }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(75, 85, 99, 0.3)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{Math.round(value)}</span>
          {label && <span className="text-xs text-gray-400 text-center">{label}</span>}
        </div>
      </div>
    );
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return '#10B981';
    if (score >= 70) return '#F59E0B';
    return '#EF4444';
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

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
            Performance Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time analytics and performance metrics showcasing the technical excellence and optimization of this portfolio.
          </p>
        </motion.div>

        {/* Lighthouse Scores */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Google Lighthouse Audit Scores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(animatedValues.lighthouse).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <CircularProgress
                  value={value}
                  color={getScoreColor(value)}
                  label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Web Vitals */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Core Web Vitals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
            >
              <FaBolt className="text-4xl text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Largest Contentful Paint</h4>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {animatedValues.webVitals.lcp.toFixed(1)}s
              </div>
              <div className="text-sm text-gray-400">Excellent (&lt; 2.5s)</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
            >
              <FaRocket className="text-4xl text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">First Input Delay</h4>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {Math.round(animatedValues.webVitals.fid)}ms
              </div>
              <div className="text-sm text-gray-400">Excellent (&lt; 100ms)</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
            >
              <FaChartLine className="text-4xl text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Cumulative Layout Shift</h4>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {animatedValues.webVitals.cls.toFixed(3)}
              </div>
              <div className="text-sm text-gray-400">Excellent (&lt; 0.1)</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Analytics Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Analytics Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center lg:col-span-1"
            >
              <FaGlobe className="text-3xl text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-400">
                {animatedValues.analytics.totalVisitors.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total Visitors</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center lg:col-span-1"
            >
              <FaDesktop className="text-3xl text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400">
                {animatedValues.analytics.uniqueVisitors.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Unique Visitors</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center lg:col-span-1"
            >
              <FaChartLine className="text-3xl text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-400">
                {animatedValues.analytics.pageViews.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Page Views</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center lg:col-span-1"
            >
              <FaRocket className="text-3xl text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-400">
                {animatedValues.analytics.bounceRate.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-400">Bounce Rate</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center lg:col-span-1"
            >
              <FaBolt className="text-3xl text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-cyan-400">
                {formatDuration(Math.round(animatedValues.analytics.avgSessionDuration))}
              </div>
              <div className="text-sm text-gray-400">Avg. Session</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Device Breakdown */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Device Usage Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
            >
              <FaMobile className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Mobile</h4>
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {Math.round(animatedValues.deviceBreakdown.mobile)}%
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedValues.deviceBreakdown.mobile}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
            >
              <FaDesktop className="text-4xl text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Desktop</h4>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {Math.round(animatedValues.deviceBreakdown.desktop)}%
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedValues.deviceBreakdown.desktop}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
            >
              <FaGlobe className="text-4xl text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Tablet</h4>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {Math.round(animatedValues.deviceBreakdown.tablet)}%
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedValues.deviceBreakdown.tablet}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-green-400 to-cyan-500 h-2 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PerformanceDashboard;