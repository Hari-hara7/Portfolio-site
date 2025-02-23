import React from "react";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogCard = ({ title, excerpt, slug, publishedAt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)" }}
      transition={{ duration: 0.3 }}
      className="relative max-w-md mx-auto bg-black/60 backdrop-blur-lg text-white rounded-xl shadow-lg overflow-hidden p-6 border border-cyan-500 hover:border-cyan-400 transition-all duration-300"
    >
      {/* Neon Badge */}
      <div className="absolute -top-5 -left-5 bg-cyan-500 text-black text-xs px-3 py-1 rounded-full shadow-md">
        <FaBookOpen className="inline mr-1" /> Blog
      </div>

      <h2 className="text-2xl font-bold mb-2 text-cyan-400 drop-shadow-lg">
        {title}
      </h2>
      <p className="text-gray-300">{excerpt}</p>

      <small className="block mt-4 text-gray-400">
        Published: {new Date(publishedAt).toLocaleDateString()}
      </small>

      <a
        href={`/blog/${slug}`}
        className="mt-4 flex items-center justify-center bg-cyan-600 hover:bg-cyan-400 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
      >
        Read More <FaArrowRight className="ml-2" />
      </a>
    </motion.div>
  );
};

export default BlogCard;
