/** AboutMe.tsx
 *  
 *  AboutMe component that displays a little about the developer.
 * 
 */
import React from 'react';
import style from "../../styles/components/sections/AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <section className={style.aboutMe}>
      <div className={style.header}>
        <h2>About Me</h2>
        <img src="https://via.placeholder.com/250x250.png?text=Jeremy+Gavrilov" alt="Jeremy Gavrilov" className={style.aboutMePhoto} />
      </div>
      <div className={style.aboutMeText}>
        <p>
          As a passionate Full Stack Developer holding a Computer Science degree from Syracuse University, 
          I bring two years of industry experience to the table, along with expertise in APIs, AWS, Java, Web Development, and App Development.
        </p>
        <p>
          I thrive on tackling complex projects and am committed to staying current with cutting-edge technologies and industry best practices.
          When I'm not immersed in coding, you can find me adventuring through the urban jungle, unwinding with video games or a captivating movie, 
          or expressing my creativity in the kitchen through baking.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

