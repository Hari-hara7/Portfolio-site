import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import { FaPaperPlane, FaSignOutAlt, FaGoogle } from "react-icons/fa";
import Chatbot from "./Chatbot"; // Import the chatbot

interface GuestbookEntry {
  id?: string;
  name: string;
  message: string;
  email?: string;
  photoURL?: string;
  createdAt?: string;
}

const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [newEntry, setNewEntry] = useState<GuestbookEntry>({
    name: "",
    message: "",
    email: "",
    photoURL: "",
  });
  const [user, setUser] = useState<any>(null);

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
    if (newEntry.message && user) {
      const newDoc = {
        name: user.displayName || "Anonymous",
        email: user.email || "No Email",
        message: newEntry.message,
        photoURL: user.photoURL || "",
        createdAt: Timestamp.fromDate(new Date()).toDate().toISOString(),
      };
      await addDoc(guestbookRef, newDoc);
      setEntries((prev) => [newDoc, ...prev]);
      setNewEntry({ name: "", message: "", email: "", photoURL: "" });
    }
  };

  // Sign In with Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    fetchEntries();

    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-[#030712] text-white min-h-screen p-6">
     <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 mb-6 text-center mt-16">
  Welcome to My Guestbook ✨
</h2>

      <p className="text-lg mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  Share your thoughts! ✍️ Sign in and leave a message in my guestbook. 🌟
</p>


      {/* Authentication Section */}
      <div className="mb-6 text-center">
        {user ? (
          <div className="flex items-center justify-center space-x-4">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <p>Signed in as {user.displayName || "Anonymous"}</p>
            <button
              onClick={handleSignOut}
              className="bg-red-500 px-4 py-2 rounded flex items-center space-x-2"
            >
              <FaSignOutAlt />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="relative px-6 py-3 text-white font-bold rounded overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-border-flow"></span>
            <span className="relative flex items-center space-x-2 z-10">
              <FaGoogle />
              <span>Sign in with Google</span>
            </span>
          </button>
        )}
      </div>

      {/* Form Section */}
      {user && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4 max-w-xl mx-auto">
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={newEntry.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-800 text-white h-32 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#3bc2ca] via-[#8c5bdb] to-[#08f7b9] py-2 px-6 rounded font-bold text-black flex items-center space-x-2 w-full sm:w-auto mx-auto"
          >
            <FaPaperPlane />
            <span>Submit</span>
          </button>
        </form>
      )}

      {/* Entries Section */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 rounded shadow-lg max-w-3xl mx-auto flex items-center space-x-4"
          >
            <img
              src={entry.photoURL || "https://via.placeholder.com/40"}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-xl">{entry.name}</p>
              <p>{entry.message}</p>
              {entry.email && <p className="text-sm text-gray-400">{entry.email}</p>}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chatbot */}
      <div className="mt-12">
        <Chatbot />
      </div>
    </div>
  );
};

export default Guestbook;
