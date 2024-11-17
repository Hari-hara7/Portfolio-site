import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaUserAlt } from "react-icons/fa";

// Importing images from assets
import hackathonImage from "../assets/harihara.jpg";
import infyniteCertificate from "../assets/certificate.jpeg";
import academicPalImage from "../assets/statics.jpeg";

// Achievements data
const achievements = [
  {
    title: "Top 10 in Infynite Hackathon",
    description: "Placed in the top 10 at the Infynite Hackathon conducted by PES University.",
    year: "2024",
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    certificate: infyniteCertificate,
    image: hackathonImage,
    initialViewCount: 532,  // Set initial view count to 532
  },
  {
    title: "Academic Pal - 2.7k Users",
    description: "Developed 'Academic Pal', a website for university students, which has reached 2.7k active users.",
    year: "2023",
    icon: <FaUserAlt className="text-4xl text-blue-400" />,
    image: academicPalImage,
    initialViewCount: 532,  // Set initial view count to 532
  },
  {
    title: "Website for Developers at NIT JSR",
    description: "Designed and developed a website for developers, widely used by students of NIT JSR for templates.",
    year: "2023",
    icon: <FaUserAlt className="text-4xl text-green-400" />,
    initialViewCount: 532,  // Set initial view count to 532
  },
  {
    title: "We4Tech Agency - 17 Portfolio Projects",
    description: "Started the agency 'We4Tech' and completed 17 portfolio website projects for SRM University, Chennai.",
    year: "2023",
    icon: <FaCertificate className="text-4xl text-orange-400" />,
    initialViewCount: 532,  // Set initial view count to 532
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to several open-source projects on GitHub.",
    year: "2022",
    icon: <FaCertificate className="text-4xl text-cyan-400" />,
    initialViewCount: 532,  // Set initial view count to 532
  },
  {
    title: "First Money from Skill Crafters",
    description: "Earned my first income from Skill Crafters by contributing in coding.",
    year: "2022",
    icon: <FaCertificate className="text-4xl text-pink-400" />,
    initialViewCount: 532,  // Set initial view count to 532
  },
];

const Achievements: React.FC = () => {
  const [viewCounts, setViewCounts] = useState<number[]>(() => {
    // Load view counts from localStorage, if they exist
    const savedCounts = localStorage.getItem("viewCounts");
    return savedCounts ? JSON.parse(savedCounts) : achievements.map((achievement) => achievement.initialViewCount);
  });

  useEffect(() => {
    // Update the view counts in localStorage when the component mounts
    localStorage.setItem("viewCounts", JSON.stringify(viewCounts));
  }, [viewCounts]);

  const incrementViewCount = (index: number) => {
    // Increment the view count for a specific achievement by 532
    const updatedCounts = [...viewCounts];
    updatedCounts[index] += 532;
    setViewCounts(updatedCounts);
  };

  return (
    <section id="achievements" className="bg-gradient-to-r from-[#030712] to-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Achievements
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          Here are some of my proudest moments and accomplishments.
        </motion.p>

        {/* Achievements List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 border-2 border-cyan-500 hover:shadow-2xl hover:border-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105"
              onClick={() => incrementViewCount(index)} // Increment on click
            >
              {/* Achievement Icon */}
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gradient">{achievement.title}</h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">{achievement.description}</p>
              <span className="block mt-4 text-xs sm:text-sm text-gray-500">{achievement.year}</span>

              {/* View Count */}
              <div className="mt-4 text-xs sm:text-sm text-gray-400">
                <strong>View Count: </strong>{viewCounts[index] || 0}
              </div>

              {/* Achievement Image */}
              {achievement.image && (
                <div className="mt-4 h-36 sm:h-48 rounded-lg overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="max-w-full mx-auto mt-2 rounded-lg border-2 border-gray-600 shadow-lg hover:scale-105 transition-all"
                  />
                </div>
              )}

              {/* Achievement Certificate */}
              {achievement.certificate && (
                <div className="mt-4">
                  <a href={achievement.certificate} target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={achievement.certificate}
                      alt="Certificate"
                      className="max-w-full mx-auto mt-2 rounded-lg border-2 border-gray-600 shadow-lg hover:scale-105 transition-all"
                    />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
