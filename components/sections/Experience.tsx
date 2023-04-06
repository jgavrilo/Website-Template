import React from 'react';
import style from '../../styles/components/sections/Experience.module.css';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
};

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Company A',
      location: 'City, Country',
      dates: 'January 2022 - Present',
      description: [
        'Developed and maintained web applications using React, Node.js, and MongoDB.',
        'Collaborated with cross-functional teams to deliver high-quality software.',
        'Implemented responsive designs and optimized web performance.',
      ],
    },
    {
      id: 2,
      title: 'Web Developer',
      company: 'Company B',
      location: 'City, Country',
      dates: 'June 2020 - December 2021',
      description: [
        'Designed and developed web applications using HTML, CSS, and JavaScript.',
        'Worked closely with the design team to implement user interfaces.',
        'Provided technical support and bug fixes for client projects.',
      ],
    },
    // Add more jobs as needed
  ];

  return (
    <section className={style.experience}>
      <h2>Experience</h2>
      <div className={style.jobsContainer}>
        {jobs.map((job) => (
          <div key={job.id} className={style.job}>
            <h3 className={style.jobTitle}>{job.title}</h3>
            <h4 className={style.jobCompany}>{job.company}</h4>
            <p className={style.jobLocation}>{job.location}</p>
            <p className={style.jobDates}>{job.dates}</p>
            <ul className={style.jobDescription}>
              {job.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
