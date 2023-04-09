import React, { useEffect, useState } from 'react';
import style from "../../styles/components/sections/Introduction.module.css";

const Introduction: React.FC = () => {
  return (
    <div className={style.introContainer}>
      <div className={style.introduction}>
        <h1>
          <span id={style.message}>Hello World!</span>
        </h1>
        <p>
          I'm a passionate and detail-oriented Full Stack Developer with a strong background in Java, Python, and Typescript. I love creating innovative solutions and leveraging technology to improve user experiences. Welcome to my personal website, where you can learn more about my skills, projects, and insights in the world of software development.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
