/** Introduction.tsx
 *  
 *  Introduction component that displays a brief description of the developer and their skills.
 * 
 */
import React from 'react';
import style from "../../styles/components/sections/Introduction.module.css";

const Introduction: React.FC = () => {
  return (
    <div className={style.introduction}>
      {/* Hello World message */}
      <p id={style.helloWorld} className={`${style.fadeIn}`} style={{animationDelay: '0s'}}>
        Hello, World! I'm 
      </p>
      {/* Name and message */}
      <h1 className={`${style.fadeIn}`} style={{animationDelay: '0.5s'}}>
        <span id={style.name}>Jeremy Gavrilov.</span>
        <br/>
        <span id={style.message}>Just another guy who codes.</span>
      </h1>
      {/* Bio */}
      <p id={style.welcome} className={`${style.fadeIn}`} style={{animationDelay: '1s'}}>
        I'm a passionate and detail-oriented Full Stack Developer with a strong background in Java, Python, and Typescript. 
        I love creating innovative solutions and leveraging technology to improve user experiences. 
        Welcome to my personal website, where you can learn more about my skills, projects, and insights in the world of software development.
      </p>
    </div>
  );
};

export default Introduction;
