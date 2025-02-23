import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../graphql/queries";
import { FaCalendarAlt, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogPage = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG, { variables: { slug } });

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-cyan-400 text-xl sm:text-2xl">
        <FaSpinner className="animate-spin mr-2" /> Loading...
      </div>
    );

  if (error)
    return (
      <p className="text-center text-red-500 mt-6 sm:mt-8 text-sm sm:text-lg">
        ❌ Error: {error.message}
      </p>
    );

  const { title, content, publishedAt } = data.blog;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-6 sm:px-8 py-10 sm:py-12 bg-black/60 backdrop-blur-lg shadow-lg border border-cyan-500 rounded-xl text-white relative mt-8 sm:mt-10 min-h-[500px] flex flex-col"
    >
      {/* Glowing Neon Effect */}
      <div className="absolute inset-0 bg-cyan-500 opacity-20 blur-3xl rounded-xl"></div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-4 sm:mb-6 drop-shadow-lg text-center">
        {title}
      </h1>

      <div className="flex justify-center items-center text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        <FaCalendarAlt className="mr-2 text-cyan-300" />
        <span className="hover:text-cyan-400 transition duration-300">
          Published: {new Date(publishedAt).toLocaleDateString()}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="prose prose-lg text-gray-300 leading-relaxed hover:text-cyan-300 transition duration-300 text-justify sm:text-left px-2 sm:px-0 flex-grow overflow-auto"
      >
        <p>{content}</p>
      </motion.div>
    </motion.article>
  );
};

export default BlogPage;
