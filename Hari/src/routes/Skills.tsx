import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chatbot from "./Chatbot";
import { useInView } from 'react-intersection-observer';
import MatrixBackground from "./MatrixBackground";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaServer,
  FaGithub,
  FaGit,
  FaPython,
  FaJava,
  FaTwitch,
  FaCube,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiFramer,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiRender,
  SiClerk,
  SiGoogleanalytics,
  SiPostman,
  SiInsomnia,
  SiGooglecloud,
  SiTailwindcss,
  SiVite,

  SiCloudinary,

} from "react-icons/si";

import { MdApi } from "react-icons/md";




const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const terminalContent = [
    "Hari@skills:~$ Initializing environment... [▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒] 40%",
    "Hari@skills:~$ Loading development tools... [🔽] Downloading tools... [⚡]",
    "Hari@skills:~$ Setting up design tools... [███████▒▒▒▒▒▒▒▒▒▒▒] 60%",
    "Hari@skills:~$ Installing module: `react`... [████████████▒▒▒▒▒▒] 75% [🔥]",
    "Hari@skills:~$ Installing module: `webpack`... [███████████████████] 90% [✅]",
    "Hari@skills:~$ Fetching deployment platforms... [📡] Connecting... [✔️]",
    "Hari@skills:~$ Skills initialization complete! [🔧] Setup finished.",
    "Hari@skills:~$ Welcome to my portfolio! [🎉] Ready to explore.",
  ];

  useEffect(() => {
    let index = 0;

    const addLine = () => {
      if (index < terminalContent.length) {
        setTerminalText((prev) => [...prev, terminalContent[index]]);
        index++;
      } else {
        setTimeout(() => setIsLoading(false), 1000); // Delay before showing main content
      }
    };

    const interval = setInterval(addLine, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="skills"
      className="bg-[#030712] text-white py-20 px-6 md:px-12 mt-16 relative"
    >
      <MatrixBackground />

      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-[50vh] space-y-4">
          <div className="bg-black text-cyan-500 p-4 rounded-lg w-16/17 sm:w-4/5 max-w-2xl text-sm font-mono border border-cyan-600 shadow-lg">
            {terminalText.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <span className="animate-blink">█</span>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400"
          >
            My Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mt-4 text-gray-300"
          >
            Hover over the icons to explore my expertise in development, design, and deployment.
          </motion.p>

          <div className="mt-12 space-y-16">
            <SkillCategory
              title="Frontend Development"
              skills={[
                { icon: <FaHtml5 />, name: "HTML5", color: "text-red-500" },
      { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
      { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
      { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-500" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-500" },
      { icon: <SiVite />, name: "Vite", color: "text-orange-500" },
              ]}
            />

            <SkillCategory
              title="Backend Development"
              skills={[
                { icon: <SiFirebase />, name: "Firebase", color: "text-orange-500" },
                { icon: <FaServer />, name: "Node.js", color: "text-green-500" },
                { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
                { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
                { icon: <SiPrisma />, name: "Prisma", color: "text-blue-400" },
              ]}
            />

            <SkillCategory
              title="Third-Party APIs"
              skills={[
                { icon: <MdApi />, name: "Formspree", color: "text-purple-500" },
                { icon: <MdApi />, name: "Google APIs", color: "text-blue-400" },
                { icon: <SiClerk />, name: "Clerk API", color: "text-indigo-600" },
                { icon: <MdApi />, name: "Nasa API", color: "text-red-500" },
                { icon: <FaTwitch />, name: "Tawk.to", color: "text-teal-500" },
                { icon: <MdApi />, name: "Twilio", color: "text-emerald-500" },
                { icon: <SiGooglecloud />, name: "Gemini API", color: "text-orange-500" },
                { icon: <MdApi />, name: "Tidio", color: "text-green-500" },
              ]}
            />

            <SkillCategory
              title="Design Tools"
              skills={[
                { icon: <SiFramer />, name: "Framer", color: "text-blue-400" },
                { icon: <SiCanva />, name: "Canva", color: "text-pink-400" },
                { icon: <FaCube />, name: "Spline", color: "text-blue-500" }, 
              ]}
            />

            <SkillCategory
              title="Deployment Platforms"
              skills={[
                { icon: <SiNetlify />, name: "Netlify", color: "text-green-400" },
                { icon: <SiVercel />, name: "Vercel", color: "text-white" },
                { icon: <SiRender />, name: "Render", color: "text-blue-500" },
                { icon: <FaGithub />, name: "GitHub Pages", color: "text-white" },
              ]}
            />

            <SkillCategory
              title="Tools"
              skills={[
                { icon: <FaGit />, name: "Git", color: "text-orange-500" },
                { icon: <FaGithub />, name: "GitHub", color: "text-gray-400" },
                { icon: <SiPostman />, name: "Postman", color: "text-red-400" },
                { icon: <SiInsomnia />, name: "Insomnia", color: "text-purple-400" },
                { icon: <SiGoogleanalytics />, name: "Google Analytics", color: "text-green-500" }, 
              ]}
            />

            <SkillCategory
              title="Programming Languages"
              skills={[
                { icon: <FaJava />, name: "Java", color: "text-red-600" },
                { icon: <FaPython />, name: "Python", color: "text-yellow-500" },
                { icon: <FaServer />, name: "C", color: "text-blue-400" },
              ]}
            />

            <ProgressSection
              progressData={[
                { name: "Frontend Development", percentage: 90 },
                { name: "Backend Development", percentage: 75 },
                { name: "UI/UX Design", percentage: 95 },
                { name: "DevOps", percentage: 90 },
              ]}
            />
          </div>
        </div>
      )}
      <Chatbot />
    </section>
  );
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: { icon: React.ReactNode; name: string; color: string }[];
}) => (
  <div>
    <h3 className="text-2xl font-semibold text-gradient">{title}</h3>
    <motion.div
      className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group flex flex-col items-center p-4 bg-dark-800 rounded-lg shadow-lg cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 border-[3px] border-cyan-500 rounded-lg"></div>
          <div
            className={`text-4xl z-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
          >
            {skill.icon}
          </div>
          <p className="mt-3 text-sm text-gray-300 font-semibold z-10">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const ProgressSection = ({
  progressData,
}: {
  progressData: { name: string; percentage: number }[];
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when it first comes into view
    threshold: 0.1,    // Trigger animation when 10% of the component is in view
  });

  return (
    <div ref={ref} className="mt-12">
      <h3 className="text-3xl font-semibold text-gradient mb-6">Progress</h3>
      <div className="space-y-6">
        {progressData.map((data, index) => (
          <div key={index} className="text-left">
            <p className="text-lg font-semibold text-gray-400 mb-2">{data.name}</p>

            <div className="w-full bg-gray-800 h-2 rounded-full shadow-md">
              <motion.div
                className="h-full bg-cyan-500 rounded-full"
                style={{ width: `${data.percentage}%` }}
                initial={{ width: 0 }}
                animate={{
                  width: inView ? `${data.percentage}%` : 0,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
              />
            </div>

            <div className="flex justify-between text-gray-400 mt-2">
              <span className="text-sm">{data.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Skills;
