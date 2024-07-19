import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-[#7469B6] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-gray-200">
            Register
          </Link>
          <Link to="/quiz" className="text-white hover:text-gray-200">
            Quiz
          </Link>
          <Link to="/flashcards" className="text-white hover:text-gray-200">
            Flashcards
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
