"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tutors = [
  { name: "CodeBot", emoji: "🤖" },
  { name: "Python Wizard", emoji: "🧙‍♂️" },
  { name: "Professor Byte", emoji: "👨‍🏫" },
];

export default function TutorSelector({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-yellow-200 text-gray-900 p-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold text-purple-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Choose Your AI Tutor
      </motion.h2>

      {/* Tutors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <motion.button
            key={tutor.name}
            onClick={() => onSelect(tutor)}
            className="w-full md:w-48 h-48 bg-gradient-to-r from-green-100 to-blue-200 text-gray-800 rounded-2xl shadow-md flex flex-col items-center justify-center text-2xl font-medium 
                       border border-gray-300 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-5xl mb-2">{tutor.emoji}</span>
            <span>{tutor.name}</span>
          </motion.button>
        ))}
      </div>

     
      <div className="mt-12 text-center">
       
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
    </div>
  );
}
