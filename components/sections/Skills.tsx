import React from 'react';
import style from '../../styles/components/sections/Skills.module.css';

const Skills: React.FC = () => {
  const skills = [    
    'Java',
    'Web Development',
    'Next.js',
    'React.js',
    'TypeScript',
    'JavaScript',
    'iOS Development',
    'SwiftUI',
    'API Development',
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
