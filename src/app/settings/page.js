"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Settings() {
  const [apiKey, setApiKey] = useState("");
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    const storedKey = localStorage.getItem("apiKey");
    if (storedKey) setApiKey(storedKey);
  }, []);

  const saveApiKey = () => {
    if (!apiKey.trim()) {
      alert("Please enter a valid API key.");
      return;
    }
    localStorage.setItem("apiKey", apiKey);
    alert("API Key saved!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
      <motion.h2
        className="text-3xl font-semibold text-black mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        API Key Configuration
      </motion.h2>
      
      <motion.p
        className="text-black text-lg text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Enter your OpenAI API key below to start interacting with the AI Tutor.
      </motion.p>
      
      <motion.div
        className="w-full max-w-md bg-white rounded-xl shadow-xl p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <input 
          type="password"
          value={isUserInteracting ? apiKey : ""}
          onChange={(e) => {
            setIsUserInteracting(true);
            setApiKey(e.target.value);
          }}
          className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter API Key here"
        />
        
        <button 
          onClick={saveApiKey}
          className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition duration-300 transform hover:scale-105"
        >
          Save API Key
        </button>
        
        {/* Center the "Go back to Home" Button */}
        <div className="mt-6 flex justify-center">
          <Link href="/">
            <motion.button
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-purple-600 transition duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go back to Home 🚀
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
