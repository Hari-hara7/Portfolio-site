import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaDiscord, FaMediumM } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa'; 
import Chatbot from "./Chatbot"; 
import TerminalAnimation from './TerminalAnimation'; // Assuming TerminalAnimation is a separate component

const Contact: React.FC = () => {
  const [showContactPage, setShowContactPage] = useState(false); // State to control when the contact page loads
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    serviceType: 'General Inquiry',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // This effect will trigger once the terminal animation has finished
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactPage(true); // Show the contact page after 3 seconds (or after the terminal animation finishes)
    }, 14000); // Adjust the time to match the duration of your terminal animation

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formEndpoint = 'https://usebasin.com/f/6bfedd3896c1';

    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setIsError(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <section id="contact" className="bg-dark-800 text-white py-20 px-6">
      {/* Show Terminal Animation first */}
      {!showContactPage ? (
        <TerminalAnimation /> // Assuming this component is already implemented
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            className="bg-dark-800 p-6 md:p-8 rounded-lg shadow-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Get In Touch
            </motion.h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              We'd love to hear from you! Whether you have questions, need help with a project, or just want to say hello. Fill out the form below, and I'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-gray-300">
                  Type of Service
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  rows={6}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold rounded-md hover:bg-gradient-to-l"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin mx-auto" />
                ) : (
                  'Send Message'
                )}
              </motion.button>
              {isSubmitted && !isError && (
                <p className="text-green-500 mt-4 text-center">
                  Message sent successfully!
                </p>
              )}
              {isError && (
                <p className="text-red-500 mt-4 text-center">
                  Something went wrong, please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="flex flex-col justify-center items-start space-y-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Contact Info
            </h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Prefer reaching out directly? Below you'll find all my contact details. Feel free to call, email, or connect with me on social media.
            </p>
            <div className="text-gray-300 space-y-2 text-sm md:text-base">
              <p className="flex items-center">
                <FaPhoneAlt className="mr-2 text-cyan-400" />
                <a href="tel:+7989777877" className="hover:text-pink-500">
                  7989777877
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-cyan-400" />
                <a href="mailto:Hariharanath247@gmail.com" className="hover:text-pink-500">
                  Hariharanath247@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-cyan-400" />
                <a href="mailto:nnm23cs256@nmamit.in" className="hover:text-pink-500">
                  nnm23cs256@nmamit.in
                </a>
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              {['github', 'linkedin', 'twitter', 'instagram', 'discord', 'medium'].map((social) => (
                <a
                  key={social}
                  href={
                    social === 'discord'
                      ? 'https://discord.gg/Xn8uyh4Js'
                      : social === 'medium'
                      ? 'https://medium.com/@hariharanath247'
                      : social === 'github'
                      ? 'https://github.com/Hari-hara7'
                      : social === 'linkedin'
                      ? 'https://www.linkedin.com/in/hari-hara-nath-a13583282/'
                      : social === 'twitter'
                      ? 'https://x.com/Hariharana70309?t=Ib05QY4zN8F41MsLHAix5Q&s=09'
                      : social === 'instagram'
                      ? 'https://instagram.com/hari_hara_nath77'
                      : ''
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-pink-500 text-2xl transition duration-300"
                >
                  {social === 'github' && <FaGithub />}
                  {social === 'linkedin' && <FaLinkedin />}
                  {social === 'twitter' && <FaTwitter />}
                  {social === 'instagram' && <FaInstagram />}
                  {social === 'discord' && <FaDiscord />}
                  {social === 'medium' && <FaMediumM />}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
      <Chatbot />
    </section>
  );
};

export default Contact;
