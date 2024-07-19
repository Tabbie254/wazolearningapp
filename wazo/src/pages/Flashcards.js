import React from 'react';

const flashcards = [
  { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  { question: "What is Tailwind CSS?", answer: "A utility-first CSS framework for creating custom designs." },
  { question: "What is Node.js?", answer: "A JavaScript runtime built on Chrome's V8 JavaScript engine." },
  { question: "What is the purpose of Redux?", answer: "To manage the state of an application in a predictable way." },
  { question: "What is a REST API?", answer: "An architectural style for designing networked applications using HTTP methods." },
];

const Flashcards = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Flashcards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {flashcards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <div className="font-semibold text-xl text-gray-900 mb-3">{card.question}</div>
            <div className="text-gray-700 text-base">{card.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
