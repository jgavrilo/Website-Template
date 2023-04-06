import React from 'react';
import style from '../../styles/components/sections/Education.module.css';

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  dates: string;
};

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'XYZ University',
      location: 'City, Country',
      dates: '2016 - 2020',
    },
    // Add more education items as needed
  ];

  return (
    <section className={style.education}>
      <h2>Education</h2>
      <div className={style.educationContainer}>
        {educationItems.map((item) => (
          <div key={item.id} className={style.educationItem}>
            <h3 className={style.degree}>{item.degree}</h3>
            <h4 className={style.institution}>{item.institution}</h4>
            <p className={style.location}>{item.location}</p>
            <p className={style.dates}>{item.dates}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
