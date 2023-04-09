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
      title: 'Project A',
      description: 'A brief description of Project A.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/300x200',
      liveLink: 'https://project-a.example.com',
      repoLink: 'https://github.com/yourusername/project-a',
    },
    {
      id: 2,
      title: 'Project B',
      description: 'B brief description of Project B.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/300x200',
      liveLink: 'https://project-b.example.com',
      repoLink: 'https://github.com/yourusername/project-b',
    },
    {
      id: 3,
      title: 'Project C',
      description: 'C brief description of Project C.',
      technologies: ['React', 'Node.js', 'MongoDB'],
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
