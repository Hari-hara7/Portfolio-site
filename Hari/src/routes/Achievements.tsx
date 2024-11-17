import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Image imports (Make sure to replace these with your actual images)
import achievementImage1 from '../assets/googleads.jpeg';
import achievementImage2 from '../assets/certificate.jpeg';
import achievementImage3 from '../assets/statics.jpeg';

// Icons for achievements (use appropriate icon imports)
import { FaAd, FaTrophy, FaUsers, FaLaptopCode, FaRocket, FaEye } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [viewCounts, setViewCounts] = useState({
    googleAdSense: 0,
    hackathon: 0,
    userGrowth: 0,
    designGrid: 0,
    we4Tech: 0,
  });

  // Function to handle the view increment
  const incrementViewCount = (key: string) => {
    const updatedCounts = { ...viewCounts, [key]: viewCounts[key] + 1 };
    setViewCounts(updatedCounts);

    // Save the updated view counts to localStorage
    localStorage.setItem('viewCounts', JSON.stringify(updatedCounts));
  };

  useEffect(() => {
    // Check if the viewCounts already exist in localStorage
    const storedCounts = localStorage.getItem('viewCounts');
    if (storedCounts) {
      setViewCounts(JSON.parse(storedCounts)); // Load the counts from localStorage
    }

    // Simulating loading state
    setTimeout(() => {
      setIsLoading(false); // Stop loading after data is set
    }, 2000); // Simulate a 2-second loading time
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        {/* Loader Spinner */}
        <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400 border-b-4 border-gray-700"></div>
      </div>
    );
  }

  return (
    <section id="achievements" className="py-20 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text">
          My Achievements
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          A glimpse of the milestones I've achieved through my journey.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Achievement 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-cyan-400 relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => incrementViewCount('googleAdSense')}
          >
            <div className="absolute top-4 left-4 text-cyan-400">
              <FaAd size={30} />
            </div>
            <img src={achievementImage1} alt="Google AdSense Approval" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-cyan-400">Google AdSense Approval</h3>
            <p className="text-gray-300 mt-2">
              After being rejected 3 times, Academic Pal was approved for Google AdSense, marking a major milestone for the platform.
            </p>
            <div className="text-gray-500 mt-4 flex items-center">
              <FaEye className="mr-2" />
              Views: {viewCounts.googleAdSense}
            </div>
          </motion.div>

          {/* Achievement 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-cyan-400 relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => incrementViewCount('hackathon')}
          >
            <div className="absolute top-4 left-4 text-cyan-400">
              <FaTrophy size={30} />
            </div>
            <img src={achievementImage2} alt="Top 10 in Infynite Hackathon" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-cyan-400">Top 10 in Infynite Hackathon</h3>
            <p className="text-gray-300 mt-2">
              Secured a top 10 position in the Infynite Hackathon hosted by PES University, showcasing my problem-solving and coding skills.
            </p>
            <div className="text-gray-500 mt-4 flex items-center">
              <FaEye className="mr-2" />
              Views: {viewCounts.hackathon}
            </div>
          </motion.div>

          {/* Achievement 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-cyan-400 relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => incrementViewCount('userGrowth')}
          >
            <div className="absolute top-4 left-4 text-cyan-400">
              <FaUsers size={30} />
            </div>
            <img src={achievementImage3} alt="2.7K Users on Academic Pal" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-cyan-400">2.7K Users on Academic Pal</h3>
            <p className="text-gray-300 mt-2">
              Academic Pal reached 2.7K users and started generating revenue through Skill Crafters from the sale of roadmap guides.
            </p>
            <div className="text-gray-500 mt-4 flex items-center">
              <FaEye className="mr-2" />
              Views: {viewCounts.userGrowth}
            </div>
          </motion.div>

          {/* Achievement 4 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-cyan-400 relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => incrementViewCount('designGrid')}
          >
            <div className="absolute top-4 left-4 text-cyan-400">
              <FaLaptopCode size={30} />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400">Design Grid for NIT JSR</h3>
            <p className="text-gray-300 mt-2">
              Created a grid design used by NIT JSR students, providing a more efficient and visually appealing way to organize content.
            </p>
            <div className="text-gray-500 mt-4 flex items-center">
              <FaEye className="mr-2" />
              Views: {viewCounts.designGrid}
            </div>
          </motion.div>

          {/* Achievement 5 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-cyan-400 relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => incrementViewCount('we4Tech')}
          >
            <div className="absolute top-4 left-4 text-cyan-400">
              <FaRocket size={30} />
            </div>
            <h3 className="text-xl font-semibold text-cyan-400">Started We4Tech Agency</h3>
            <p className="text-gray-300 mt-2">
              Founded We4Tech Agency, completing 17 portfolio projects for SRM CSE students, showcasing both my entrepreneurial and technical skills.
            </p>
            <div className="text-gray-500 mt-4 flex items-center">
              <FaEye className="mr-2" />
              Views: {viewCounts.we4Tech}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
