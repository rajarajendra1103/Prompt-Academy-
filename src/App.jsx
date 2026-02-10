import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Curriculum from './pages/Curriculum';
import Lesson from './pages/Lesson';
import PromptLibrary from './pages/PromptLibrary';
import UIDictionary from './pages/UIDictionary';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/curriculum/:courseId" element={<Curriculum />} />
          <Route path="/lesson/:courseId/:lessonId" element={<Lesson />} />
          <Route path="/library" element={<PromptLibrary />} />
          <Route path="/dictionary" element={<UIDictionary />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
