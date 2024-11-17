import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa'; // Importing spinner icon

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    serviceType: 'General Inquiry',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true); // Set loading to true when form is submitting

    // Replace with your Formspree endpoint URL
    const formEndpoint = 'https://usebasin.com/f/6bfedd3896c1'; // Formspree URL you get after creating the form

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
      setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
    } else {
      setIsError(true);
    }

    setIsLoading(false); // Set loading to false after submission
  };

  return (
    <section id="contact" className="bg-dark-800 text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h2>

        {/* Contact Information */}
        <p className="text-lg md:text-xl mt-6 text-gray-300">
          Reach out via the form below or connect with me on social media.
        </p>

        {/* Contact Info Section */}
        <motion.div
          className="mt-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-gradient">Contact Info</h3>
          <p className="mt-4 text-gray-300">
            Phone: <span className="text-cyan-400">7989777877</span>
          </p>
          <p className="text-gray-300">
            Email: <span className="text-cyan-400">Hariharanath247@gmail.com</span>
          </p>
          <p className="text-gray-300">
            College Email: <span className="text-cyan-400">nnm23cs256@nmamit.in</span>
          </p>
        </motion.div>

        {/* Social Media Links with Animated Icons */}
        <motion.div
          className="mt-8 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {['github', 'linkedin', 'twitter', 'instagram'].map((social, index) => (
            <motion.a
              key={social}
              href={`https://www.${social}.com/Hari-hara7`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-pink-500 text-3xl"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {social === 'github' && <FaGithub />}
              {social === 'linkedin' && <FaLinkedin />}
              {social === 'twitter' && <FaTwitter />}
              {social === 'instagram' && <FaInstagram />}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="mt-12 bg-gray-800 p-8 rounded-lg shadow-xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300">Your Name</label>
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
              <label htmlFor="email" className="block text-gray-300">Your Email</label>
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
              <label htmlFor="serviceType" className="block text-gray-300">Type of Service</label>
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
              <label htmlFor="message" className="block text-gray-300">Your Message</label>
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
            <div>
              <motion.button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-semibold rounded-md hover:bg-gradient-to-l"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                disabled={isLoading} // Disable the button when loading
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin mx-auto" /> // Display the spinner
                ) : isSubmitted ? (
                  'Message Sent!'
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>
          </form>
          {isError && (
            <div className="mt-4 text-red-500 text-center">
              There was an issue with your submission. Please try again.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
