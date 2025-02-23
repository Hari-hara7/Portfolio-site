import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BLOG } from "../graphql/mutations";
import { FaHeading, FaAlignLeft, FaRegFileAlt, FaCheckCircle } from "react-icons/fa";

const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [status, setStatus] = useState("DRAFT");

  const [createBlog, { loading, error }] = useMutation(CREATE_BLOG);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog({
        variables: { title, content, excerpt, status },
      });
      alert("Blog created successfully!");
      setTitle("");
      setContent("");
      setExcerpt("");
      setStatus("DRAFT");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="w-full max-w-lg bg-gray-900 bg-opacity-90 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          ✍️ Create a New Blog
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div className="relative">
            <FaHeading className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Blog Title"
              className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>

          {/* Excerpt Field */}
          <div className="relative">
            <FaAlignLeft className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              placeholder="Short Excerpt"
              className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Content Field */}
          <div className="relative">
            <FaRegFileAlt className="absolute left-3 top-3 text-gray-400" />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Write your blog content..."
              rows="5"
              className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            ></textarea>
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <FaCheckCircle className="absolute left-3 top-3 text-gray-400" />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "🚀 Create Blog"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-sm text-red-500 animate-pulse">
            ❌ Error: {error.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default CreateBlogPage;
