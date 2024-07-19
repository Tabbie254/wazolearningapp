import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import QuizPage from './pages/QuizPage';
import Header from './components/Header';
import Flashcards from './pages/Flashcards';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/flashcards" element={<Flashcards />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
