"use client";

import { useState } from "react";
import Link from "next/link";

const quizQuestions = [
  {
    question: "What is Python used for?",
    options: ["Web Development", "Data Science", "AI and Machine Learning", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "What is the result of 3 + 4?",
    options: ["7", "6", "8", "9"],
    correctAnswer: "7",
  },
  {
    question: "What does 'print' do in Python?",
    options: ["It prints text", "It takes user input", "It defines a function", "It adds two numbers"],
    correctAnswer: "It prints text",
  },
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleFinishQuiz = () => {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setQuizCompleted(true);
  };

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-yellow-200 text-gray-900 p-6">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">Quiz Completed!</h2>
        <p className="text-xl mb-6">Your score: {score} / {quizQuestions.length}</p>
        <Link href="/">
          <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-yellow-200 text-gray-900 p-6">
      <h2 className="text-4xl font-extrabold text-purple-700 mb-6">Quiz</h2>
      <p className="text-xl mb-6">{currentQuestion.question}</p>

      <div className="flex flex-col space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`w-full md:w-96 p-3 text-lg font-medium rounded-lg shadow-md ${
              selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
            } hover:bg-blue-400 transition duration-300`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {currentQuestionIndex === quizQuestions.length - 1 ? (
          <button
            onClick={handleFinishQuiz}
            className="bg-purple-500 text-white py-3 px-3 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
          >
            Finish Quiz
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="bg-purple-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
