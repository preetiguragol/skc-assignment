"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-yellow-200 text-white p-6">
      
      <motion.h1
        className="text-6xl font-bold text-center drop-shadow-xl text-purple-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to AI Python Tutor!
      </motion.h1>

   
      <motion.p
        className="text-lg max-w-xl text-center mt-4 opacity-90 text-green-800 font-serif"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Learn Python in a fun, colorful, and interactive way! Choose your AI tutor, start coding,
        get real-time feedback and exciting lessons!
      </motion.p>

      <motion.div
        className="flex space-x-6 mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        
        <Link href="/chat">
          <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:scale-110 transition duration-300 transform">
            Start Learning 🚀
          </button>
        </Link>

     
        <Link href="/settings">
          <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:scale-110 transition duration-300 transform">
            Configure API Key 🔑
          </button>
        </Link>
      </motion.div>

    
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link href="/quiz">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:scale-110 transition duration-300 transform">
            Take the Quiz 📝
          </button>
        </Link>
      </motion.div>

     
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <p className="text-lg text-black italic">"Coding is magic, and you're the wizard!" 🎩✨</p>
      </motion.div>
    </div>
  );
}
