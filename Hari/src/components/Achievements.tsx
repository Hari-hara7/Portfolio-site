import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; 

import hackathonImage from "../assets/harihara.jpg";
import infyniteCertificate from "../assets/certificate.jpeg";
import academicPalImage from "../assets/statics.jpeg";

const achievements = [
  {
    title: "Top 10 in Infynite Hackathon",
    description: "Placed in the top 10 at the Infynite Hackathon conducted by PES University.",
    year: "2024",
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    certificate: infyniteCertificate,
    image: hackathonImage,
  },
  {
    title: "Academic Pal - 2.7k Users",
    description: "Developed 'Academic Pal', a website for university students, which has reached 2.7k active users.",
    year: "2023",
    icon: <FaUserAlt className="text-4xl text-blue-400" />,
    image: academicPalImage,
  },
  {
    title: "Website for Developers at NIT JSR",
    description: "Designed and developed a website for developers, widely used by students of NIT JSR for templates.",
    year: "2023",
    icon: <FaUserAlt className="text-4xl text-green-400" />,
  },
  {
    title: "We4Tech Agency - 17 Portfolio Projects",
    description: "Started the agency 'We4Tech' and completed 17 portfolio website projects for SRM University, Chennai.",
    year: "2023",
    icon: <FaCertificate className="text-4xl text-orange-400" />,
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to several open-source projects on GitHub.",
    year: "2023",
    icon: <FaCertificate className="text-4xl text-cyan-400" />,
  },
  {
    title: "First Money from Skill Crafters",
    description: "Earned my first income from Skill Crafters by contributing in coding.",
    year: "2024",
    icon: <FaCertificate className="text-4xl text-pink-400" />,
  },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="bg-gradient-to-r from-[#030712] to-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          My Achievements
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-dark-300"
        >
          Here are some of my proudest moments and accomplishments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-dark-800 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 border-2 border-cyan-500 hover:shadow-2xl hover:border-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105"
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gradient">{achievement.title}</h3>
              <p className="text-white-400 mt-2 text-sm sm:text-base">{achievement.description}</p>
              <span className="block mt-4 text-xs sm:text-sm text-white-500">{achievement.year}</span>

              {achievement.image && (
                <div className="mt-4 h-36 sm:h-48 rounded-lg overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="max-w-full mx-auto mt-2 rounded-lg border-2 border-dark-600 shadow-lg hover:scale-105 transition-all"
                  />
                </div>
              )}

              {achievement.certificate && (
                <div className="mt-4">
                  <a href={achievement.certificate} target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={achievement.certificate}
                      alt="Certificate"
                      className="max-w-full mx-auto mt-2 rounded-lg border-2 border-dark-600 shadow-lg hover:scale-105 transition-all"
                    />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <Link
            to="/achievements"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 hover:from-green-500 hover:to-cyan-500 text-white font-semibold text-lg shadow-lg transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
