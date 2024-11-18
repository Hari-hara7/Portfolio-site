import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGlobe, FaCode, FaBullseye, FaChartLine, FaStar, FaRocket, FaUsers } from 'react-icons/fa';

// Importing Images
import googleAdsense from '../assets/googleads.jpeg';
import hackathon from '../assets/certificate.jpeg';
import users from '../assets/statics.jpeg';

const achievements = [
  
  {
    title: 'Top 10 in Infynite Hackathon',
    description:
      'Achieved a spot in the top 10 at Infynite Hackathon by PES University, showcasing skills in problem-solving and innovation.',
    icon: <FaAward />,
    image: hackathon,
  },
  {
    title: '2.7K Users on Academic Pal',
    description:
      'Gained a user base of over 2.7K students, reflecting trust and value among the academic community.',
    icon: <FaUsers />,
    image: users,
  },
  {
    title: 'Google AdSense Approval',
    description:
      'After 3 rejections, Academic Pal successfully got Google AdSense approval. This milestone ensures better revenue generation for growth.',
    icon: <FaBullseye />,
    image: googleAdsense,
  },
  {
    title: 'Revenue from Skill Crafters',
    description:
      'Generated significant revenue by selling roadmaps to developers and students, contributing to their career growth.',
    icon: <FaChartLine />,
  },
  {
    title: 'Used by NIT JSR Students',
    description:
      'The design grid created was adopted by NIT JSR students for their projects, showcasing its effectiveness and appeal.',
    icon: <FaCode />,
  },
  {
    title: 'Started We4Tech Agency',
    description:
      'Founded We4Tech, a tech agency delivering high-quality websites, portfolios, and software solutions.',
    icon: <FaRocket />,
  },
  {
    title: 'Completed 17 Projects',
    description:
      'Successfully delivered 17 portfolio projects for SRM CSE students, showcasing expertise in design and development.',
    icon: <FaStar />,
  },
  {
    title: 'Ranked #1 in SEO',
    description:
      'Achieved the #1 spot in SEO rankings for Academic Pal, enhancing online visibility and traffic.',
    icon: <FaGlobe />,
  },
];

const Achievements: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate a loading delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        {/* Loader Spinner */}
        <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-800 border-b-4 border-gray-200"></div>
      </div>
    );
  }

  return (
    <section className="bg-[#030712] text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-lora font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-400 text-center mt-12">
          My Achievements
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-300 text-center font-lato">
          Explore my milestones and accomplishments that reflect dedication and success.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative bg-dark-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-400 rounded-xl p-1 animate-gradient-border"></div>
<div className="relative bg-gray-900 rounded-xl p-6 flex flex-col items-center">

                {/* Image */}
                {achievement.image && (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-400 rounded-full text-2xl text-gray-800 mb-4">
                  {achievement.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-lora font-semibold text-cyan-400 text-center">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-300 text-center font-lato">{achievement.description}</p>

                {/* CTA Button */}
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-lato font-semibold text-cyan-400 underline hover:text-green-400 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
