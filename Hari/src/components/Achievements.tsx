import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaUserAlt, FaBriefcase, FaEye, FaStar, FaAward ,FaMedal} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom"; 

import hackathonImage from "../assets/harihara.jpg";
import infyniteCertificate from "../assets/certificate.jpeg";
import academicPalImage from "../assets/analytics.png";
import Techrangerscertificate from "../assets/Techrangerescertificate.jpg";
import techRangersImage from "../assets/{C2BC1EE4-9785-460F-952B-90DC733C0601}.png";//Hari/src/assets/upgradehackthon.jpg
import webCraftImage from "../assets/upgradehackthon.jpg";//Hari/src/assets/{C2BC1EE4-9785-460F-952B-90DC733C0601}.png
import webCraftCertificate from "../assets/wecrfta2.jpg";
import bluestockImage from "../assets/WhatsApp Image 2025-01-31 at 10.42.55_270226b6.jpg";
import internshipCertificate from "../assets/offerletter.jpg";//Hari/src/assets/saphackfest.jpg
import sap from "../assets/sap.jpg";
import sapHackfestImage from "../assets/saphackfest.jpg";//Hari/src/assets/SAP hackest winner.pdf
import sapHackfestCertificate from "../assets/SAP hackest winner.pdf";
import udhbav from "../assets/udhbav.jpg";//Hari/src/assets/srinathon.jpg
import srinathon from "../assets/srinathon.jpg";//Hari/src/assets/acthon.jpg
import acethon from "../assets/{B366514D-6D44-4B16-8A29-E8A78777D2A3}.png";//Hari/src/assets/webcraft.jpg
import webcarft from "../assets/webcraft.jpg";//Hari/src/assets/aloysius.jpeg
import staloysius from "../assets/aloysius.jpeg";


const achievements = [
{
  title: "Winner - SAP Hackfest (Special Content)",
  description:
    "My team won the Special Content track at SAP Hackfest, achieving Top 1 out of 5000 teams and 26,000 students at Coimbatore, Tamil Nadu. Recognized for creativity, innovation, and impactful content delivery.",
  year: "2025",
  category: "Competition",
  featured: true,
  icon: <FaTrophy className="text-4xl text-yellow-400" />,
  certificate: sapHackfestCertificate, 
  image: sapHackfestImage,
},

{
  title: "2nd Runner-Up - The Reality Hackathon",
  description: "Achieved 2nd Runner-Up position in 'The Reality' hackathon organized by Udbhav at Nitte Professional Institute, demonstrating creativity and teamwork in solving real-world challenges.",
  year: "2025",
  category: "Competition",
  featured: true,
  icon: <FaTrophy className="text-4xl text-yellow-400" />,
  image: udhbav,
},

{
  title: "2nd Place - Srinathon Hackathon",
  description: "Secured 2nd place in Srinathon for two distinct problem statements, showcasing versatility, innovation, and strong problem-solving abilities.",
  year: "2025",
  category: "Competition",
  featured: true,
  icon: <FaMedal className="text-4xl text-yellow-300" />,

  image: srinathon,
},
  {
  title: "2nd Runner-Up – Code Sprint Hackathon",
  description:
    "Secured the 2nd Runner-Up position at the Code Sprint Hackathon conducted by St. Aloysius, showcasing strong problem-solving skills, rapid prototyping, and effective team collaboration under time constraints.",
  year: "2025",
  category: "Hackathon",
  featured: true,
  icon: <FaTrophy className="text-4xl text-yellow-400" />,
  image: staloysius,
},
{
  title: "Winner & 1st Place - Acethon Hackathon",
  description: "Won 1st place in Acethon organized by the ACE Community, highlighting technical expertise, design thinking, and impactful project execution.",
  year: "2025",
  category: "Competition",
  featured: true,
  icon: <FaMedal className="text-4xl text-yellow-500" />,
  image: acethon,
},
  {
    title: "Winner & 1st Place - TechRangers Hackathon",
    description: "Secured 1st place in the prestigious TechRangers Hackathon, showcasing innovation and technical excellence.",
    year: "2025",
    category: "Competition",
    featured: true,
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    certificate: Techrangerscertificate,
    image: techRangersImage,
  },


  {
    title: "Winner & 1st Place - WebCraft",
    description: "Achieved 1st place in WebCraft, demonstrating expertise in web development and design innovation.",
    year: "2025",
    category: "Competition",
    featured: true,
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    certificate: webCraftCertificate,
    image: webcarft,
  },
  {
    title: "Top 1 in SAP Hackfest (Regional Round)",
    description: "Selected among 50+ teams and ranked 1st in the top 10 teams in the regional round of the SAP Hackfest Hackathon. **Team Name: EcoPreneurs**.",
    year: "2024",
    category: "Competition",
    featured: true,
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    image: sap,
  },
  {
    title: "Top 10 in Infynite Hackathon",
    description: "Placed in the top 10 at the Infynite Hackathon conducted by PES University.",
    year: "2024",
    category: "Competition",
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    certificate: infyniteCertificate,
    image: hackathonImage,
  },
  {
    title: "Academic Pal - 3.98k Users",
    description: "Developed 'Academic Pal', a website for university students, which has reached 3.98k active users.",
    year: "2023",
    category: "Project Impact",
    featured: true,
    icon: <FaUserAlt className="text-4xl text-blue-400" />,
    image: academicPalImage,
  },
  {
    title: "Internship at Bluestock Fintech",
    description: "Secured an internship at Bluestock Fintech, a product-based company, during my 2nd year, 4th semester.",
    year: "2024",
    category: "Professional",
    icon: <FaBriefcase className="text-4xl text-blue-500" />, 
    certificate: internshipCertificate,
    image: bluestockImage,
  },
  {
    title: "Website for Developers at NIT JSR",
    description: "Designed and developed a website for developers, widely used by students of NIT JSR for templates.",
    year: "2023",
    category: "Project Impact",
    icon: <FaUserAlt className="text-4xl text-green-400" />,
  },
  {
    title: "We4Tech Agency - 17 Portfolio Projects",
    description: "Started the agency 'We4Tech' and completed 17 portfolio website projects for SRM University, Chennai.",
    year: "2023",
    category: "Entrepreneurship",
    featured: true,
 
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to several open-source projects on GitHub.",
    year: "2023",
    category: "Development",
  
  },
  {
    title: "First Money from Skill Crafters",
    description: "Earned my first income from Skill Crafters by contributing in coding.",
    year: "2024",
    category: "Professional",
    
  },
];

const Achievements: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const featuredAchievements = achievements.filter(achievement => achievement.featured);
  const otherAchievements = achievements.filter(achievement => !achievement.featured);

  return (
    <section id="achievements" className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.6, 0.2, 0.6],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <FaAward className="mr-2" />
            Hall of Achievements 🏆
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron leading-tight mb-8"
              {...floatingAnimation}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                My Achievements
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Here are some of my proudest moments and accomplishments that showcase my journey
            in technology, competitions, and professional growth.
          </motion.p>

          {/* Featured Achievements */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-8 font-orbitron">
              🌟 Featured Achievements
            </h3>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredAchievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  achievement={achievement}
                  index={index}
                  isHovered={hoveredCard === index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  featured={true}
                />
              ))}
            </div>
          </motion.div>

          {/* Other Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 font-orbitron">
              🚀 All Achievements
            </h3>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {otherAchievements.map((achievement, index) => (
                <AchievementCard
                  key={index + featuredAchievements.length}
                  achievement={achievement}
                  index={index + featuredAchievements.length}
                  isHovered={hoveredCard === index + featuredAchievements.length}
                  onMouseEnter={() => setHoveredCard(index + featuredAchievements.length)}
                  onMouseLeave={() => setHoveredCard(null)}
                  featured={false}
                />
              ))}
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <Link
              to="/achievements"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 backdrop-blur-sm"
            >
              <FaAward className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View All Achievements
              <HiSparkles className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AchievementCard = ({
  achievement,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  featured
}: {
  achievement: any;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  featured: boolean;
}) => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1,
      }
    }
  };

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
        isHovered 
          ? "border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20" 
          : "border border-white/10 hover:border-cyan-500/50"
      } bg-black/40 backdrop-blur-sm hover:bg-black/60`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <FaStar className="mr-1" />
            Featured
          </div>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30">
          {achievement.category}
        </div>
      </div>

      {/* Image */}
      {achievement.image && (
        <div className="relative overflow-hidden h-48 sm:h-52">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Icon and Year */}
        <div className="flex items-center justify-between mb-4 mt-4">
          <div className="flex items-center space-x-3">
            {achievement.icon}
            <span className="text-cyan-400 font-orbitron text-sm font-semibold">
              {achievement.year}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300 mb-3">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 font-Quattrocento">
          {achievement.description}
        </p>

        {/* Certificate Link */}
        {achievement.certificate && (
          <div className="mt-4">
            <a 
              href={achievement.certificate} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              onClick={(e) => e.stopPropagation()}
            >
              <FaCertificate />
              View Certificate
            </a>
          </div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default Achievements;
