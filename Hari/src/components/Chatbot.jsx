import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaPaperPlane,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaUserAlt,
  FaHandshake,
  FaInfoCircle,
  FaTimes,
  FaComments,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import HariImage from "../assets/Hari2.jpg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Welcome to My Portfolio!", isUser: false },
    { text: "I'm here to help you explore my work. Pick a topic below or ask me anything!", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const randomResponses = [
    "I have experience in building 3D web apps using Three.js and GSAP.",
 
    "Check out my portfolio projects for innovative solutions.",
    "Collaboration is key! Let’s create something amazing together.",
    "Want to know more about my journey? Explore the About section.",
    "Looking for my contact details? Click the Contact button below!",
    "I'm open to new projects and partnerships. Let’s collaborate!",
    "My expertise spans UI/UX design and full-stack development.",
    "Curious about my tech stack? Check out the ‘Skills’ section.",
    "Explore my achievements and past work in the About section.",
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse transition-opacity" />
            
            {/* Button */}
            <div className="relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-4 rounded-full shadow-2xl">
              <FaComments size={28} className="text-white" />
            </div>
            
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-0 right-0 w-[calc(100vw-2rem)] sm:w-96 mb-2"
          >
            {/* Main Chat Container */}
            <div className="relative backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
              
              {/* Header */}
              <div className="relative bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm border-b border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-50"
                      />
                      <img
                        src={HariImage}
                        alt="Hari"
                        className="relative w-10 h-10 rounded-full border-2 border-cyan-500/50 object-cover"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold flex items-center gap-2">
                        Hari's AI Assistant
                        <HiSparkles className="text-yellow-400 text-sm" />
                      </h3>
                      <p className="text-xs text-gray-400">Always here to help</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleToggle}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTimes size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="relative h-80 sm:h-96 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-end gap-2 ${
                      msg.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    {/* Bot Avatar */}
                    {!msg.isUser && (
                      <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        src={HariImage}
                        alt="Hari"
                        className="w-7 h-7 rounded-full border border-cyan-500/30 flex-shrink-0"
                      />
                    )}

                    {/* Message Bubble */}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.isUser
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-br-none"
                          : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-100 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      {msg.link && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={msg.link}
                          className={`inline-flex items-center gap-1 mt-2 text-xs font-medium ${
                            msg.isUser ? "text-white/90" : "text-cyan-400"
                          } hover:underline`}
                        >
                          Visit Page →
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {typing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={HariImage}
                      alt="Hari"
                      className="w-7 h-7 rounded-full border border-cyan-500/30"
                    />
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl rounded-bl-none px-4 py-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                            className="w-2 h-2 bg-cyan-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="relative px-4 py-3 border-t border-white/10">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {actionButtons.slice(0, 6).map((action, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleActionClick(action.response, action.link)}
                      className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-2 transition-all"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-lg group-hover:scale-110 transition-transform">
                          {action.icon}
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium">
                          {action.label}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="relative p-4 pt-0">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!input.trim()}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl p-3 transition-all"
                  >
                    <FaPaperPlane className="text-white" size={18} />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
