import React from 'react';
import style from "../styles/Introduction.module.css";

const Introduction: React.FC = () => {
  return (
    <div className={style.introduction}>
      <h1>Hello! I'm Your Name</h1>
      <p>
        I'm a passionate and detail-oriented Full Stack Developer with a strong background in JavaScript, React, and Node.js. I love creating innovative solutions and leveraging technology to improve user experiences. Welcome to my personal website, where you can learn more about my skills, projects, and insights in the world of software development.
      </p>
    </div>
  );
};

export default Introduction;
