


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chatbot from "./Chatbot";
import { Link ,useNavigate} from "react-router-dom";
import InfiniteScroll from './InfiniteScroll';
import { ScrollProgress } from "../components/magicui/scroll-progress";//Hari/src/assets/BLUESTOCK.png

import Bluetsock from "../assets/bs.png";
import Bluetsockoffer from "../assets/BEENSD41690 - Copy.pdf";
import Thunderoffer from "../assets/thundertribes.pdf";
import Thunderlogo from "../assets/thunderlogo.webp";//Hari/src/assets/globalintercertificate.pdf
import globallogo from "../assets/global.png";
import globallanecertificate from "../assets/globalintercertificate.pdf";
import {
  FaGraduationCap,
  FaSchool,
  FaHiking,
  FaCode,
  FaPuzzlePiece,
  FaVolleyballBall,
  
  FaBriefcase,
} from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import MyImage from "../assets/Hari1.jpg";

import Resume from "../assets/Hariharanath resume.pdf";//Hari/src/assets/Hariharanath resume.pdfHari/src/assets/bs.png

const Skills: React.FC = () => {
  const [isTerminalVisible, setIsTerminalVisible] = useState(true);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const secretNumber = prompt("Enter the secret number:");
    if (secretNumber === "2277") {
      navigate("/create");
    } else {
      alert("Incorrect secret number! Access denied.");
    }
  };

  useEffect(() => {
    const commands = [
      ">>> Installing module: `axios`... [█████████▒▒▒▒▒▒▒▒▒▒▒▒] 55% [⚡]",
      ">>> Configuring security settings... [🔒] Secure connection established.",
      ">>> Running diagnostics... [💻] System status: All green.",
      ">>> Downloading update... [⬇️] Fetching patch... [✔️] Done.",
      ">>> Finalizing setup... [🔧] Almost there... [🚀]",
    ];

    let currentLine = 0;

    const typeCommand = () => {
      if (currentLine < commands.length) {
        setTerminalLines((prev) => [...prev, commands[currentLine]]);
        currentLine++;
        setTimeout(typeCommand, 1500);
      } else {
        setTimeout(() => setIsTerminalVisible(false), 1000);
      }
    };

    typeCommand();
  }, []);
  const items = [
    { content: "✨ About Me" },
    {
      content: (
        <p>
          Hi! I'm <strong>Hari</strong>, a B.Tech student and web developer, passionate about building 
          interactive and modern user interfaces.
        </p>
      )
    },
    { content: "🚀 Skills" },
    {
      content: (
        <p>
          Expertise in <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>Firebase</strong>.
        </p>
      )
    },
    { content: "📬 Contact" },
    {
      content: (
        <p>
          <strong>Email:</strong> Hariharanath247@gmail.com
        </p>
      )
    }
  ];
  
  
  const imageVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {isTerminalVisible ? (
        <div className="flex justify-center items-center h-screen bg-black text-cyan-500 font-mono text-xs sm:text-sm md:text-base">
          <div className="w-full max-w-2xl p-4">
            {terminalLines.map((line, index) => (
              <div key={index} className="mb-2">
                {line}
              </div>
            ))}
            <div className="animate-pulse">$</div>
          </div>
        </div>
      ) : (
        <section id="about" className="relative bg-dark-800 text-white py-16 px-6 md:px-12">
          <div className="relative mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - About Me */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-justify"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gradient mb-6 font-orbitron">
                About Me
              </h2>
              <div className="flex justify-center mb-6">
                <motion.img
                  src={MyImage}
                  alt="My Journey"
                  className="rounded-lg shadow-lg w-64 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl h-64 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap="tap"
                />
              </div>
              <p className="text-lg leading-relaxed font-light text-gray-300">
                Hi, I’m a dedicated developer and lifelong learner with a passion
                for crafting innovative solutions in technology. Currently pursuing
                a B.Tech in Computer Science(Full Stack Development) at NMAMIT, I
                specialize in building user-friendly and responsive web applications
                that merge design with functionality.
              </p>
  
          
<div className="mt-12">
  <h3 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 CCCC">
    Work Experience
  </h3>

  <div className="space-y-8">
  
    <div className="group flex items-start space-x-6 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
      <img src={Bluetsock} alt="BlueStock Logo" className="w-16 h-27 object-contain rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300" />
      <div>
        <h4 className="text-xl font-semibold">
          <a
            href={Bluetsockoffer}
            download="BlueStock_Offer_Letter.pdf"
            className="text-cyan-400 underline hover:text-cyan-300 transition duration-300"
          >
            Software Development Engineer Intern
          </a>
        </h4>
        <p className="text-sm text-gray-400 mt-1">
          <a
            href="https://bluestock.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 transition duration-300"
          >
            BlueStock
          </a> | Feb 2, 2024 - Mar 30, 2024
        </p>
      </div>
    </div>


    <div className="group flex items-start space-x-6 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
      <img src={Thunderlogo} alt="ThunderTribes Logo" className="w-16 h-16 object-contain rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300" />
      <div>
        <h4 className="text-xl font-semibold">
          <a
            href={Thunderoffer}
            download="ThunderTribes_Offer_Letter.pdf"
            className="text-cyan-400 underline hover:text-cyan-300 transition duration-300"
          >
            Software Development Engineer
          </a>
        </h4>
        <p className="text-sm text-gray-400 mt-1">
          <a
            href="https://thundertribes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 transition duration-300"
          >
           ThunderTribes Pvt Ltd
          </a> | Ongoing
        </p>
      </div>
    </div>

    
    <div className="group flex items-start space-x-6 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
      <img src={globallogo} alt="Global Lane Logo" className="w-16 h-16 object-contain rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300" />
      <div>
        <h4 className="text-xl font-semibold">
          <a
            href={globallanecertificate}
            download="GlobalLane_Offer_Letter.pdf"
            className="text-cyan-400 underline hover:text-cyan-300 transition duration-300"
          >
            Full Stack Developer
          </a>
        </h4>
        <p className="text-sm text-gray-400 mt-1">
          <a
            href="https://www.global-lane.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 transition duration-300"
          >
            Global Lane
          </a> | Oct 2024 - Nov 2024
        </p>
      </div>
    </div>
  </div>
</div>

  
              <div className="mt-6 flex space-x-4">
                <a
                  href={Resume}
                  download="My_Resume.pdf"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-green-500 font-orbitron text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-cyan-400 hover:to-green-400 focus:ring focus:ring-cyan-300 transition duration-300"
                >
                  Download Resume
                </a>
  
                <Link
                  to="/create"
                  onClick={handleClick}
                  className="inline-block bg-gradient-to-r from-red-500 to-orange-500 font-orbitron text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-red-400 hover:to-orange-400 focus:ring focus:ring-red-300 transition duration-300"
                >
                  Admin
                </Link>
              </div>
            </motion.div>
  
         
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
             
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-gradient font-orbitron">Education</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <FaGraduationCap className="text-purple-500 text-2xl" />
                    <div>
                      <h4 className="text-lg font-medium">B.Tech in CSE (FSD)</h4>
                      <p className="text-sm text-gray-400">NMAMIT, Nitte (2023-2027)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaSchool className="text-pink-500 text-2xl" />
                    <div>
                      <h4 className="text-lg font-medium">Intermediate (MPC) - 95%</h4>
                      <p className="text-sm text-gray-400">Sri Chaitanya College, Andhra Pradesh</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaSchool className="text-yellow-500 text-2xl" />
                    <div>
                      <h4 className="text-lg font-medium">High School - 97%</h4>
                      <p className="text-sm text-gray-400">Roots Public School, Andhra Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>
  
             
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-gradient font-orbitron">Hobbies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4">
                    <FaVolleyballBall className="text-cyan-400 text-2xl" />
                    <p className="text-lg font-light">Playing Volleyball</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <GiCricketBat className="text-pink-500 text-2xl" />
                    <p className="text-lg font-light">Playing Cricket</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaHiking className="text-yellow-400 text-2xl" />
                    <p className="text-lg font-light">Playing Kabaddi</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPuzzlePiece className="text-cyan-400 text-2xl" />
                    <p className="text-lg font-light">Solving Different Cubes</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaCode className="text-pink-500 text-2xl" />
                    <p className="text-lg font-light">Building Interactive Websites</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
  
          <Chatbot />
          <div style={{ height: '500px', position: 'relative' }}>
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.7}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </div>
        </section>
      )}
    </>
  );
  
    
};

export default Skills;