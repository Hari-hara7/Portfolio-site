import React, { useState } from "react";
import { motion } from "framer-motion";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
     
      const response = await fetch("https://usebasin.com/f/6bfedd3896c1", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setIsError(true); 
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setIsError(true); 
    }
  };

  return (
    <section id="contact" className="bg-bg text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
      
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gradient"
        >
          Contact Me
        </motion.h2>

       
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mt-4 text-gray-300"
        >
          I would love to hear from you! Whether it's a project, collaboration, or just to say hi.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-lg mx-auto"
        >
          {isSubmitted ? (
            <div className="bg-green-600 p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold">Thank you for reaching out!</h3>
              <p className="mt-4">I'll get back to you as soon as possible.</p>
            </div>
          ) : isError ? (
            <div className="bg-red-600 p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-semibold">Oops! Something went wrong.</h3>
              <p className="mt-4">Please try again later.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg"
                  rows={5}
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-400 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-l hover:from-pink-600 hover:to-cyan-400 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
