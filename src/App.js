import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Links from './pages/Links';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

function AppContent() {
  const location = useLocation();

  // Dodeljujemo klasu pozadine i rasporeda samo sadržaju ispod navbar-a
  const pageClass = (() => {
    switch (location.pathname) {
      case '/home':
        return 'bodyHome';
      case '/about-me':
        return 'bodyAboutMe';
      case '/skills':
        return 'bodySkills';
      case '/links':
        return 'bodyLinks';
      case '/portfolio':
        return 'bodyPortfolio';
      case '/contact-me':
        return 'bodyContact';
      default:
        return 'bodyDefault';
    }
  })();

  return (
    <>
      {/* Navbar ide van wrappera sa klasom pageClass, full width */}
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/links">Links</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact-me">Contact Me</Link>
      </nav>

      {/* Sadržaj stranice sa klasom za pozadinu i raspored */}
      <div className={pageClass}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/links" element={<Links />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
