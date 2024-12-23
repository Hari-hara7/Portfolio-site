import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chatbot from "./Chatbot";
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
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiBulma,
  SiThreedotjs,
  SiGreensock,
  SiFigma,
  SiFramer,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiRender,
  SiClerk,
  SiGoogleanalytics,
} from "react-icons/si";

const Skills: React.FC = () => {
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
    "Hari@skills:~$ Welcome to my portfolio! [🎉] Ready to explore."
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
              title="Development Skills"
              skills={[
                { icon: <FaHtml5 />, name: "HTML5", color: "text-red-500" },
                { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
                { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
                { icon: <FaReact />, name: "React", color: "text-cyan-400" },
                { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-500" },
                { icon: <SiFirebase />, name: "Firebase", color: "text-orange-500" },
                { icon: <FaServer />, name: "SQL", color: "text-purple-500" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-blue-300" },
              ]}
            />

            <SkillCategory
              title="Design Tools"
              skills={[
                { icon: <SiFigma />, name: "Figma", color: "text-purple-400" },
                { icon: <SiFramer />, name: "Framer Motion", color: "text-blue-400" },
                { icon: <SiCanva />, name: "Canva", color: "text-pink-400" },
                { icon: <SiThreedotjs />, name: "Spline", color: "text-green-400" },
              ]}
            />

            <SkillCategory
              title="Deployment Platforms"
              skills={[
                { icon: <SiNetlify />, name: "Netlify", color: "text-green-400" },
                { icon: <SiVercel />, name: "Vercel", color: "text-black" },
                { icon: <SiRender />, name: "Render", color: "text-blue-500" },
              ]}
            />

            <SkillCategory
              title="APIs & Tools"
              skills={[
                { icon: <SiClerk />, name: "Clerk API", color: "text-indigo-600" },
                { icon: <SiGoogleanalytics />, name: "Google Analytics", color: "text-blue-500" },
                { icon: <FaGithub />, name: "GitHub", color: "text-gray-400" },
                { icon: <FaGit />, name: "Git", color: "text-orange-500" },
              ]}
            />
          </div>
        </div>
      )}
      <Chatbot />
    </section>
  );
};

const SkillCategory: React.FC<{
  title: string;
  skills: { icon: React.ReactNode; name: string; color: string }[];
}> = ({ title, skills }) => (
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

export default Skills;
