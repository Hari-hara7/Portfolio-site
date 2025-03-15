import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../graphql/queries";
import BlogCard from "../components/BlogCard";
import { FaBlog, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Loading blogs...
        </motion.p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <FaExclamationTriangle className="text-2xl mr-2 animate-pulse" />
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-12 px-6">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-10 flex items-center justify-center gap-3 mt-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaBlog className="text-purple-400" /> All Blogs
      </motion.h1>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {data.blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <BlogCard {...blog} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomePage;
