import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import { FaPaperPlane, FaSignOutAlt} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Chatbot from "./Chatbot";
import Typewriter from "typewriter-effect";
import SplashCursor from "./SplashCursor";
import { BorderBeam } from "./magicui/border-beam";
import { ShimmerButton } from "./magicui/shimmer-button";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

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

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center text-white relative"
      
    >
      <h2 className="text-4xl font-extrabold text-center mt-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
        <Typewriter
          options={{
            strings: ["Welcome to My Guestbook ✨"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h2>
      <SplashCursor color="#08f7b9" duration={1200} size={15} />

      <p className="text-lg mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Share your thoughts! ✍️ Sign in and leave a message in my guestbook. 🌟
      </p>

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
              className="relative px-6 py-2 text-white font-bold rounded overflow-hidden transition-all duration-300 bg-red-600 hover:bg-red-500"
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
            
            <span className="relative flex items-center space-x-2 z-10">
            <ShimmerButton 
  onClick={signInWithGoogle} 
  // Adjusted spacing
>
  <FcGoogle className="w-6 h-6" /> {/* Google Icon with Proper Size */}
  <span className="ml-2">Sign in with Google</span> {/* Added margin-left */}
</ShimmerButton>
            </span>
          </button>
        )}
      </div>

      {user && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4 max-w-xl mx-auto">
          <textarea
            name="message"
            placeholder="Your Message"
            value={newEntry.message}
            onChange={handleInputChange}
            className="w-full p-3 rounded bg-gray-800 text-white h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="relative bg-gradient-to-r from-[#3bc2ca] via-[#8c5bdb] to-[#08f7b9] py-2 px-6 rounded font-bold text-black flex items-center space-x-2 w-full sm:w-auto mx-auto"
          >
            <FaPaperPlane />
            <span>Submit</span>
          </button>
        </form>
      )}

<div className="space-y-4">
  {entries.map((entry) => (
    <motion.div
      key={entry.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative bg-black p-4 rounded-lg shadow-lg max-w-3xl mx-auto flex items-center space-x-4 overflow-hidden"
    >
      {/* Slower BorderBeam Animation */}
      <BorderBeam duration={8} size={200} />

      <img
        src={entry.photoURL || "https://via.placeholder.com/40"}
        alt="User"
        className="w-10 h-10 rounded-full border border-cyan-400"
      />
      <div className="text-white">
        <p className="font-bold text-xl text-cyan-300">{entry.name}</p>
        <p className="text-gray-300">{entry.message}</p>
        {entry.email && <p className="text-sm text-gray-500">{entry.email}</p>}
      </div>
    </motion.div>
  ))}
</div>
      <div className="mt-12">
        <Chatbot />
      </div>
    </div>
  );
};

export default Guestbook;
