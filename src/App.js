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
      <header className="navbar">
        <h1 className="title">Farwa Mubasher</h1>
        <nav>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('volunteer')}>Volunteer</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </header>

      <main className="content">
        <section id="about"><TabAbout /></section>
        <section id="experience"><TabWorkExperience /></section>
        <section id="projects"><TabProjects /></section>
        <section id="volunteer"><TabVolunteer /></section>
        <section id="contact"><TabContact /></section>
      </main>

      <footer>© 2025 Farwa Mubasher. All rights reserved.</footer>
    </div>
  );
};

export default App;
