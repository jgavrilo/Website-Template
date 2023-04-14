import React from 'react';
import style from '../../styles/components/sections/Projects.module.css';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveLink?: string;
  repoLink?: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Java Planner',
      description: 'A schedule management app from my introductory programming class. Designed to help students organize classes and appointments.',
      technologies: ['Java', 'I/O'],
      imageUrl: './Java.webp',
      liveLink: 'https://replit.com/@jgavrilo/javaPlanner?v=1',
      repoLink: 'https://github.com/jgavrilo/javaPlanner',
    },    
    {
      id: 2,
      title: 'Amazon Price Tracker',
      description: 'This Amazon Price Tracker webscraps Amazon in real time and outs a JSON file that gives you the best deal based on your search. Planning to revisit.',
      technologies: ['Python', 'Selenium'],
      imageUrl: 'https://via.placeholder.com/300x200',
      liveLink: 'https://github.com/jgavrilo/Amazon-Price-Tracker',
      repoLink: 'https://github.com/jgavrilo/Amazon-Price-Tracker',
    },
    {
      id: 3,
      title: 'Stock Market Analysis',
      description: 'Final Project for CIS 400 - Principle of Social Media and Data Mining. Planning to revisit.',
      technologies: ['Python', 'Twitter API', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/300x200',
      liveLink: 'https://project-c.example.com',
      repoLink: 'https://github.com/yourusername/project-c',
    },
    {
      id: 4,
      title: 'Campus Rush',
      description: 'Final Project for CIS 400 - Principle of Social Media and Data Mining. Planning to revisit.',
      technologies: ['Python', 'Twitter API', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/300x200',
      liveLink: 'https://project-c.example.com',
      repoLink: 'https://github.com/yourusername/project-c',
    },
    ];

  return (
    <section className={style.projects}>
      <h2>Projects</h2>
      <div className={style.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={style.project}>
            <img src={project.imageUrl} alt={project.title} className={style.projectImage} />
            <h3 className={style.projectTitle}>{project.title}</h3>
            <p className={style.projectDescription}>{project.description}</p>
            <div className={style.projectTechnologies}>
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className={style.projectLinks}>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={style.projectLink}>
                  Live Demo
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={style.projectLink}>
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
