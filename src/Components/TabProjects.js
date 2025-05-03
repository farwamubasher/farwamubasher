import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Ryerson Engineering Competition - Junior Design',
    description: 'Collaborated with a group of four engineering students to design a vertical garden for farmers that maximizes the water usage, is cost-efficient, and is sustainable. Presented the working design to judges leading to achieving 3rd position in a junior design',
    techStack: 'Design, Presentation',
    //link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    techStack: 'JavaScript, Node.js',
    link: 'https://github.com/yourusername/project-two'
  },
  // Add more projects as needed
];

const TabProjects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);


export default TabProjects;
