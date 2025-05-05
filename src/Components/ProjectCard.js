import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, degree, techStack, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>Degree:</strong> {degree}</p>
    <p><strong>Skills:</strong> {techStack}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

export default ProjectCard;
