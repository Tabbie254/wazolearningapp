import React, { useState } from 'react';

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    { id: 1, question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct: 'Paris' },
    { id: 2, question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correct: '4' }
  ];

  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Quiz Page</h2>
      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <p className="text-lg font-medium text-gray-700 mb-2">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`${q.id}-${option}`}
                  name={`question-${q.id}`}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={() => handleChange(q.id, option)}
                  className="form-radio h-5 w-5 text-purple-600"
                />
                <label htmlFor={`${q.id}-${option}`} className="text-gray-600">{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Submit
      </button>
      {score !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">Your Score: {score} / {questions.length}</h3>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
