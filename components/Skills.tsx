import React from 'react';
import style from '../styles/Skills.module.css';

const Skills: React.FC = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML & CSS',
    'Git',
    'TypeScript',
    'Python',
    'Django',
    'MongoDB',
    'SQL',
    'RESTful APIs',
    'Agile & Scrum',
  ];

  return (
    <section className={style.skills}>
      <h2>Skills</h2>
      <div className={style.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={style.skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
