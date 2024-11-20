import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa"; // Importing icons

interface GuestbookEntry {
  id?: string;
  name: string;
  message: string;
  email?: string;
  createdAt?: string;
}

const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [newEntry, setNewEntry] = useState<GuestbookEntry>({
    name: "",
    message: "",
    email: "",
  });

  const guestbookRef = collection(db, "guestbook");

  // Fetch entries from Firestore
  const fetchEntries = async () => {
    const querySnapshot = await getDocs(guestbookRef);
    const fetchedEntries = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as GuestbookEntry[];
    setEntries(
      fetchedEntries.sort(
        (a, b) =>
          new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime()
      )
    );
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  // Submit entry to Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.name && newEntry.message) {
      const newDoc = {
        ...newEntry,
        createdAt: Timestamp.fromDate(new Date()).toDate().toISOString(),
      };
      await addDoc(guestbookRef, newDoc);
      setEntries((prev) => [newDoc, ...prev]);
      setNewEntry({ name: "", message: "", email: "" });
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="bg-[#030712] text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-gradient mb-4 text-center sm:text-left">Welcome to Our Guestbook ✨</h2>
      <p className="text-lg mb-8 text-center sm:text-left">We'd love to hear from you! Please leave a message below:</p>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 max-w-xl mx-auto sm:mx-0">
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newEntry.name}
            onChange={handleInputChange}
            className="w-full p-3 pl-10 rounded bg-gray-800 text-white"
          />
        </div>

        <div className="relative">
          <FaPaperPlane className="absolute left-3 top-3 text-gray-500" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={newEntry.message}
            onChange={handleInputChange}
            className="w-full p-3 pl-10 rounded bg-gray-800 text-white h-32 resize-none"
          ></textarea>
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Your Email (Optional)"
            value={newEntry.email}
            onChange={handleInputChange}
            className="w-full p-3 pl-10 rounded bg-gray-800 text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-[#3bc2ca] via-[#8c5bdb] to-[#08f7b9] py-2 px-6 rounded font-bold text-black flex items-center space-x-2 w-full sm:w-auto mx-auto"
        >
          <FaPaperPlane />
          <span>Submit</span>
        </button>
      </form>

      {/* Entries Section */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 rounded shadow-lg max-w-3xl mx-auto"
          >
            <p className="font-bold text-xl">{entry.name}</p>
            <p>{entry.message}</p>
            {entry.email && <p className="text-sm text-gray-400">{entry.email}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
