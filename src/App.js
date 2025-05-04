import React, { useState } from 'react';
import './App.css';
import TabAbout from './Components/TabAbout';
import TabWorkExperience from './Components/TabWorkExperience';
import TabVolunteer from './Components/TabVolunteer';
import TabContact from './Components/TabContact';
import TabProjects from './Components/TabProjects';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <div className="app">
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">Farwa Mubasher</div>
            <div className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('volunteer')}>Volunteer</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="page-banner"></div>

      <main className="content">
        <section id="about"><TabAbout /></section>
        <section id="experience"><TabWorkExperience /></section>
        <section id="projects"><TabProjects /></section>
        <section id="volunteer"><TabVolunteer /></section>
        <section id="contact"><TabContact /></section>
      </main>

      <footer>
        © 2025 Farwa Mubasher Professional Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
