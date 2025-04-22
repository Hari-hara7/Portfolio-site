import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1 from '../assets/we4techh.png';
import { ScrollProgress } from "../components/magicui/scroll-progress";

import project2 from '../assets/acm.jpg';
import project3 from '../assets/aikyam1.png';
import project4 from '../assets/globallane.jpg';

import project5 from '../assets/designgrid-BoOHbFyy.jpg';
import  project6 from '../assets/skillcrafters.jpg';
import project7 from '../assets/academicpal.png';
import project8 from '../assets/academic2.0-CsQA-9Rp.jpg';
import project9 from '../assets/hari.png';
import project10 from '../assets/amar.png';
import project11 from '../assets/bharath.png';
import project12 from '../assets/chandras.png';
import project13 from '../assets/abhinav.png';
import project14 from '../assets/mahendra.png';
import project15 from '../assets/dinesh.png';
import project16 from '../assets/achyuth.png';
import project17 from '../assets/kiran.png';
import project18 from '../assets/devisri.png';
import project19 from '../assets/gurucharan.png';
import project20 from '../assets/achuthan.png';
import project21 from '../assets/srinath.png';
import project22 from '../assets/dheepesh.png';
import project23 from '../assets/manojh.png';
import project24 from '../assets/crypto.png';
import crypto from "../assets/cryptotracker.png";
import annaraksha from "../assets/annaraksha.png";
import game from "../assets/gamestore.png";//Hari/src/assets/codecrash.png
// Import other project images...
import TerminalAnimation from './TerminalAnimation'; // Import your TerminalAnimation component
import codecrash from "../assets/codecrash.png";//Hari/src/assets/mallanna.png
import mallannahair from "../assets/mallanna.png";//Hari/src/assets/feedback4.png
import feedbacksystem from "../assets/feedback4.png";//Hari/src/assets/leave.png
import campusleave from '../assets/leave.png';//Hari/src/assets/Screenshot 2025-04-22 212924.png
import mailingsystem from '../assets/Screenshot 2025-04-22 212924.png';


const projects = [
  
  {
    title: 'CodeCrash',
    description:
      'A fast-paced coding platform where users solve coding challenges within 2 minutes. Built with **Next.js 15+**, **Prisma**, **NenoDB via PostgreSQL**, and **Tailwind CSS**.',
    github: 'https://github.com/Hari-hara7/code-crash.git',
    livePreview: 'https://code-crash-8tel.vercel.app/',
    image: codecrash, 
  }
,
{
  title: 'CampusLeave',
  description:
    'A full-stack web app where students can apply for leave, and teachers/admins can view, accept, or reject requests. Built with the **MERN stack**, **TailwindCSS**, **Vite**, and **TypeScript**, offering a modern, clean UI.',
  github: 'https://github.com/Hari-hara7/CampusLeave.git',
  livePreview: 'https://campus-leave-74sx.vercel.app/',
  image: campusleave, 

},
{
  title: 'Student Expense Tracker',
  description:
    'A modern and responsive full-stack web app that helps students track their daily expenses with ease. Built to simplify expense management for students.',
  github: 'https://github.com/Hari-hara7/student-expense-tracker.git',
  livePreview: 'https://student-expense-tracker-chi.vercel.app/',
  image: expenseTracker, // Update with the correct image path
}

,
{
  title: 'Mailing System',
  description:
    'A full-stack web application built with the **MERN stack** (MongoDB, Express, React, Node.js) to manage emergency contacts and send emails directly from the app. Users can store and manage contact details, and send emails to any contact.',
  github: 'https://github.com/Hari-hara7/mailing-system.git',
  livePreview: 'https://mailing-system-one.vercel.app/',
  image: mailingsystem, // Update with the correct image path
}


  ,
  {
  title: 'Feedback Management System',
  description:
    'A simple and user-friendly Feedback Management System that allows students to submit feedback or report problems regarding their teachers. Includes an admin panel for viewing feedback and a student dashboard for managing submissions. Built with **Vite**, **React**, **Tailwind CSS**, **MERN stack**, and a **RESTful API**.',
  github: 'https://github.com/Hari-hara7/Studentform.git',
  livePreview: 'https://studentform-two.vercel.app/',
  image: feedbacksystem, 
}
,

{
  title: 'Mallanna HairStyles',
  description:
    'A salon management website built with **Vite**, **React**, **Firebase**, **Tailwind CSS**, and **TypeScript**. Features include salon booking, feedback system, worker management, and money management.',
  github: 'https://github.com/Hari-hara7/Mallanna-HairStyles.git',
  livePreview: 'https://mallanna-hairstyles.com/', 
  image: mallannahair, 
}
,
  {
    title: 'We4Tech Agency',
    description:
      'Showcased services built with React, Vite, Framer Motion, CSS, Basin APIs, and Axios.',
    github: 'https://github.com/Hari-hara7/we4tech-website-.git',
    livePreview: 'https://we4tech.in/#/',
    image: project1,
  },
  {
    title: "Crypto Tracker",
    description:
      "A real-time cryptocurrency tracking platform utilizing the CoinGecko API to provide live market data, price updates, and historical trends.",
   
    github: "https://github.com/Hari-hara7/Crypto.git", 
    livePreview: "https://crypto-beta-five.vercel.app/", 
   
    image: crypto, 
  },
  {
    title: "Anna Raksha",
    description:
      "A food donation and distribution platform connecting donors with NGOs and individuals in need, ensuring efficient food management and reducing waste.",
   
    github: "https://github.com/Hari-hara7/anna-raksha.git", // Replace with actual GitHub repo link
    livePreview: "https://anna-raksha-bmu9.vercel.app/", // Replace with actual deployment link

    image: annaraksha,
  },
  {
    title: "Game Store",
    description:
      "An interactive and modern gaming marketplace that secured 1st place in the WebCraft competition. Features seamless navigation, latest game listings, and a sleek UI.",
    
    github: "https://github.com/Hari-hara7/Game-Store.git", // Replace with actual GitHub repo link
    livePreview: "https://game-store-beryl.vercel.app/", // Replace with actual deployment link
    image: game, // Replace with the actual image variable
  },
  {
    title: 'ACM Club Website',
    description:
      'Official website for the ACM Club built with React, Vite, Framer Motion, CSS, Basin APIs, and Axios.',
    github: 'https://github.com/Hari-hara7/ACM-Website2.git',
    livePreview: 'https://acm-website2.vercel.app/',
    image: project2,
  },
  {
    title: 'Aikyam Quiz Website',
    description:
      'Fully secured quiz platform built with React, Vite, CSS, Axios, Framer Motion, and Basin APIs.',
    github: 'https://github.com/Hari-hara7/Aakyam.git',
    livePreview: 'https://aakyam.vercel.app/',
    image: project3,
  },
  {
    title: 'Global Lane Website',
    description:
      'Freelance project for importing/exporting agriculture products. Built with Bootstrap, HTML, CSS, JS, jQuery, and ClerkJS.',
    github: 'https://github.com/global-lane',
    livePreview: 'https://www.global-lane.com/',
    image: project4 ,
  },
  {
    title: 'Design Grid',
    description:
      'Website offering 3D and pattern designs, built with GSAP and Three.js.',
    github: 'https://github.com/Hari-hara7/Design-grid.git',
    livePreview: 'https://designgrid-two.vercel.app/',
    image: project5,
  },
  {
    title: 'Skill Crafters',
    description:
      'Roadmaps for different technologies, a premium site built with HTML, CSS, JS, and jQuery.',
    github: 'https://github.com/Hari-hara7/skill-crafters-Website.git',
    livePreview: 'https://skill-crafters.vercel.app/',
    image: project6,
  },
  {
    title: 'Academic Pal 1.0',
    description:
      'Resource hub for B.Tech students at NMAMIT, built with HTML, CSS, JS, jQuery, ClerkJS, and Basin APIs.',
    github: 'https://github.com/Hari-hara7/Academicpal--login.git',
    livePreview: 'https://academicpal.in/',
    image: project7,
  },
  {
    title: 'Academic Pal 2.0',
    description:
      'Redesigned Academic Pal with advanced UI, GSAP animations, and Three.js integrations.',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://academic-pal-v9t9.onrender.com/',
    image: project8,
  },
  {
    title: 'Crypto Learning Hub',
    description:
      'A comprehensive platform for learning about cryptocurrency and blockchain technology. Built with Next.js, TailwindCSS,TypeScript and integrated with the Gemini API for live data. It provides real-time crypto prices to enhance learning.',
    github: 'https://github.com/Hari-hara7/crypto-learning-hub.git',
    livePreview: 'https://crypto-learning-hub.vercel.app/',
    image: project24, // Replace with your actual image import or URL
  },
  {
    title: 'Hari',
    description: 'Built with HTML, CSS, JS ',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://hari-portfolio-one.vercel.app/',
    image: project9,
  },
  {
    title: 'Amar Nadh Freelancing Website',
    description: 'Built with HTML, CSS, Bootstrap, JS for a for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://amar-nadh.vercel.app/',
    image: project10,
  },
  {
    title: 'Bharath Yallale Freelancing Portfolio',
    description: 'Built with Bootstrap, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://y-bharath.vercel.app/',
    image: project11,
  },
  {
    title: 'Chandraas Freelancing Portfolio',
    description: 'Built with HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://chandrahaas.vercel.app/',
    image: project12,
  },
  {
    title: 'Abhinav Reddy Freelancing Portfolio',
    description: 'Built with HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://abhinavreddyportfolio.vercel.app/',
    image:  project13,
  },
  {
    title: 'Mahendra Varma Freelancing Portfolio',
    description: 'Built with HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://mahendra-portfolio-five.vercel.app/',
    image: project14,
  },
  {
    title: 'Dinesh Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://l-dinesh.vercel.app/',
    image: project15,
  },
  {
    title: 'Achyuth Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://achyuth-zeta.vercel.app/',
    image: project16,
  },
  {
    title: 'Kiran Freelancing Portfolio',
    description: 'Built with Tailwind CSS, HTML, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://r-kiran.vercel.app/',
    image: project17,
  },
  {
    title: 'Devi Sri Prasad Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://devi-sri-prasad.vercel.app/',
    image: project18,
  },
  {
    title: 'Guru Charan Freelancing Portfolio',
    description: 'Built with Bootstrap, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://s-guru-charan.vercel.app/',
    image: project19,
  },
  {
    title: 'Achuthans Freelancing Portfolio',
    description: 'Built with Bootstrap, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://achuthan.vercel.app/',
    image: project20,
  },
  {
    title: 'Srinath Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://srinath.vercel.app/',
    image: project21,
  },
  {
    title: 'Dheepesh Freelancing Portfolio',
    description: 'Built with Bulma, HTML, CSS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://dheepesh.vercel.app/',
    image:project22,
  },
  {
    title: 'Manojh Freelancing Portfolio',
    description: 'Built with Bootstrap, HTML, JS for SRM student from Chennai..',
    github: 'https://github.com/We4tech4-0',
    livePreview: 'https://manojh-s.vercel.app/',
    image: project23,
  },
];

const Work: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 14000); // Display terminal animation for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 lg:px-16 text-white">
        <ScrollProgress className="fixed top-0 left-0 w-full h-1 bg-cyan-500 z-50" />
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <TerminalAnimation /> {/* Using your TerminalAnimation component */}
        </div>
      ) : (
        <>
          <h2 className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mt-12">
            My Projects
          </h2>
          <p className="text-lg mt-4 text-gray-300 text-center max-w-2xl mx-auto">
            Explore some of my latest professional and personal projects crafted with passion and cutting-edge technologies.
          </p>

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group bg-opacity-80 bg-gradient-to-r from-cyan-500 to-green-400 rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                  <div className="relative w-full h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-2xl transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
                    <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-800 bg-gradient-to-r from-cyan-400 to-green-400 rounded-md shadow-md hover:scale-105 transition-transform"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-800 bg-gradient-to-r from-green-400 to-cyan-400 rounded-md shadow-md hover:scale-105 transition-transform"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Preview</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Work;
