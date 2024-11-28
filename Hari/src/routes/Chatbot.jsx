import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaPaperPlane,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaUserAlt,
  FaHandshake,
  FaInfoCircle,
} from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to Hari's Portfolio!", isUser: false },
    { text: "Explore topics below or ask me anything!", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const randomResponses = [
    "Hari has experience in building 3D web apps using Three.js and GSAP.",
    "Hari specializes in Python for AI and data science projects.",
    "Check out Hari’s portfolio projects for innovative solutions.",
    "Collaboration is key! Let’s create something amazing together.",
    "Explore the About section to learn more about Hari's journey.",
    "Looking for Hari's contact? Click the Contact button below!",
    "Want to collaborate? Hari is open to new projects and partnerships.",
    "Hari’s expertise spans UI/UX design and full-stack development.",
    "Check out the ‘Skills’ section for Hari’s tech stack.",
    "Explore Hari’s achievements and past work in the About section.",
  ];

  const actionButtons = [
    {
      label: "Skills",
      icon: <FaCode className="text-blue-500" />,
      response: "Hari's skills include React, Python, JavaScript, and 3D Web Development.",
      link: "/skills",
    },
    {
      label: "Projects",
      icon: <FaProjectDiagram className="text-teal-500" />,
      response: "Check out Hari's exciting projects in AI and Web Development.",
      link: "/work",
    },
    {
      label: "Contact",
      icon: <FaEnvelope className="text-green-500" />,
      response: "You can contact Hari at hariharanath247@gmail.com.",
      link: "/contact",
    },
    {
      label: "About",
      icon: <FaUserAlt className="text-purple-500" />,
      response: "Learn more about Hari in the About section.",
      link: "/about",
    },
    {
      label: "Collaborate",
      icon: <FaHandshake className="text-orange-500" />,
      response: "Hari is open to collaborations. Let’s connect!",
      link: "/collaboration",
    },
    {
      label: "Guestbook",
      icon: <FaInfoCircle className="text-pink-500" />,
      response: "Explore more about Hari's work and achievements.",
      link: "/Guestbook",
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * randomResponses.length);
      setMessages((prev) => [
        ...prev,
        { text: randomResponses[randomIndex], isUser: false },
      ]);
      setTyping(false); 
    }, 1000);
  };

  const handleActionClick = (response, link) => {
    setMessages((prev) => [
      ...prev,
      { text: response, isUser: false, link: link },
    ]);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
    
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-full shadow-lg cursor-pointer"
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FaRobot size={24} color="white" />
      </motion.div>

     
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative text-white p-4 rounded-lg shadow-lg w-80 mt-4"
          style={{
            background: "rgba(255, 255, 255, 0.1)", 
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "12px",
          }}
        >
          <div className="flex flex-col h-64 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg ${
                  msg.isUser
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-700 text-white self-start"
                }`}
              >
                {msg.text}
                {msg.link && (
                  <a
                    href={msg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline ml-2"
                  >
                    Visit
                  </a>
                )}
              </div>
            ))}
            {typing && (
              <div className="p-2 text-gray-500 italic">Typing...</div>
            )}
          </div>

         
          <div className="mt-4 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-l-lg focus:outline-none text-black text-sm sm:text-base"
              placeholder="Type a message..."
              style={{ minWidth: "50px" }} 
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-3 py-2 rounded-r-lg flex items-center"
              style={{ minWidth: "40px" }} 
            >
              <FaPaperPlane />
            </button>
          </div>

          
          <div className="mt-4 grid grid-cols-2 gap-2">
            {actionButtons.map((action, idx) => (
              <button
                key={idx}
                onClick={() => handleActionClick(action.response, action.link)}
                className="flex items-center bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition"
              >
                {action.icon}
                <span className="ml-2">{action.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
