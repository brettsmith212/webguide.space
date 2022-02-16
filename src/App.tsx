import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import TheGuide from "./components/guide/TheGuide";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";

const App: React.FC = () => {
  return (
    <main className="mx-16">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theguide" element={<TheGuide />} />
          <Route path="/brettsmith-portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
