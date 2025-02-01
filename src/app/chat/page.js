"use client";

import { useState, useEffect } from "react";
import TutorSelector from "@/components/TutorSelector";
import { sendMessageToOpenAI } from "@/lib/openai";
import Link from "next/link";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState(null);
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load API key safely after client mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedKey = localStorage.getItem("apiKey");
      setApiKey(savedKey || "");
      setLoading(false);
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    if (!apiKey) {
      alert("Please enter an API key in Settings.");
      return;
    }

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    try {
      const aiResponse = await sendMessageToOpenAI(updatedMessages);
      setMessages([...updatedMessages, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      console.error("Error:", error);
      alert("API Error: " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 to-yellow-400 text-white">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!tutor) return <TutorSelector onSelect={setTutor} />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-yellow-200 text-white p-6">
      <h1 className="text-4xl font-bold text-purple-700 drop-shadow-lg mb-4">
        Chat with {tutor.emoji} {tutor.name}
      </h1>

      <div className="w-full max-w-md bg-gray-100 shadow-xl rounded-xl p-4 mt-4">
        <div className="h-64 overflow-y-auto border-b border-gray-300 mb-4 p-2">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 rounded ${msg.role === "user" ? "text-right" : "text-left"}`}>
              <span className={`inline-block px-3 py-2 rounded-lg ${msg.role === "user" ? "bg-purple-500 text-white" : "bg-yellow-200 text-black"}`}>
                {msg.content}
              </span>
            </div>
          ))}
        </div>

        <div className="flex">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Python..." 
            className="flex-grow p-1 border-2 text-black border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
          />
          <button 
            onClick={sendMessage} 
            className="bg-purple-500 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </div>

      {/* Buttons for Navigation */}
      <div className="flex space-x-4 mt-6">
        {/* Link to API Key Settings Page */}
        <Link href="/settings">
          <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 font-bold text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300">
            Configure API Key 🔑
          </button>
        </Link>

        {/* Link to Home Page */}
        <Link href="/">
          <button className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 font-bold text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            Go to Home 🏠
          </button>
        </Link>
      </div>
    </div>
  );
}
