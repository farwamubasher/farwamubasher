import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Toronto Metropolitan University',
    degree: 'Bachelor of Engineering (B.Eng.) in Computer Engineering',
    description: 'Graduated in 2023 with a major in software engineering.'  //link: 'https://github.com/yourusername/project-one'
  },

  // Add more projects as needed
];

const TabProjects = () => (
  <section id="projects">
    <h2>Education</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);


export default TabProjects;
