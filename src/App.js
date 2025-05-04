import React from 'react';
import './App.css';
import TabAbout from './Components/TabAbout';
import TabWorkExperience from './Components/TabWorkExperience';
import TabVolunteer from './Components/TabVolunteer';
import TabContact from './Components/TabContact';
import TabProjects from './Components/TabProjects';

const App = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <header>
        <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Farwa Mubasher</div>
          <ul className="nav-links">
            {/* Navigation links */}
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#volunteer">Volunteer</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      </header>
      <div className="page-banner">
        {/* Page banner 
        <h2>Farwa Mubasher Website</h2>*/}
      </div>
      <main className="content">
        {/* Main content sections */}
        <section id="about"><TabAbout /></section>
        <section id="experience"><TabWorkExperience /></section>
        <section id="projects"><TabProjects /></section>
        <section id="volunteer"><TabVolunteer /></section>
        <section id="contact"><TabContact /></section>
      </main>

      <footer>
        {/* Footer */}
        © 2025 Farwa Mubasher Professional Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
