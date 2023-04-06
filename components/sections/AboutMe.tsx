import React from 'react';
import style from "../../styles/components/sections/AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <section className={style.aboutMe}>
      <h2>About Me</h2>
      <div className={style.aboutMeContent}>
        <img src="https://via.placeholder.com/200x200.png?text=Jeremy+Gavrilov" alt="Jeremy Gavrilov" className={style.aboutMePhoto} />
        <div className={style.aboutMeText}>
          <p>
            I'm a [Your role, e.g., Full Stack Developer] with a degree in [Your degree, e.g., Computer Science] from [Your university, e.g., University of XYZ]. I have been working in the industry for over [number of years] years and have experience in [mention some technologies, e.g., web development, mobile app development, cloud computing].
          </p>
          <p>
            I enjoy working on challenging projects and strive to stay up-to-date with the latest technologies and best practices. Outside of work, I'm passionate about [mention hobbies or interests, e.g., photography, hiking, and reading].
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
