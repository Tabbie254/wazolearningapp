import React from 'react';

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <div
      className={`p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${
        showAnswer ? 'bg-[#7469B6] text-white' : 'bg-white text-gray-900'
      }`}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div className="mb-4">
        <p className="text-lg font-semibold">{question}</p>
        {showAnswer && <p className="mt-2 text-md">{answer}</p>}
      </div>
      <button
        className={`px-4 py-2 rounded text-sm font-medium ${
          showAnswer ? 'bg-white text-[#7469B6]' : 'bg-[#7469B6] text-white'
        } transition-colors duration-300`}
        onClick={(e) => {
          e.stopPropagation(); // Prevent the button click from toggling the answer
          setShowAnswer(!showAnswer);
        }}
      >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
    </div>
  );
};

export default Flashcard;
