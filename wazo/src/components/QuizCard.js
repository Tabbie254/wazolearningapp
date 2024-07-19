import React from 'react';

const QuizCard = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-br from-[#E1AFD1] to-[#7469B6] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default QuizCard;
