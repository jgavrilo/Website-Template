/** Section.tsx
 * 
 *  This file defines a 'Section' component that represents a section on a webpage.
 * 
 *  @import {useEffect} from 'react' - This import statement is importing the 'useEffect' Hook from React. 
 *      The 'useEffect' Hook lets you perform side effects in function components.
 *  @import styles from '../styles/pages/Home.module.css' - Importing the CSS styles for this component from a CSS Module.
 * 
 *  @type {SectionProps} - A TypeScript type defining the shape of the props that the 'Section' component expects. 
 *      The 'id' prop is a string, and 'children' prop is a 'ReactNode', which can be any allowable JSX.
 *
 */

import { useEffect } from 'react';
import styles from '../styles/pages/Home.module.css';

type SectionProps = {
    id: string;
    children: React.ReactNode;
};

const Section = ({ id, children }: SectionProps) => {
  useEffect(() => {
    // Select the section with the id passed in as a prop.
    const section = document.querySelector(`#${id}`);
    if (!section) return;

    // Create a new Intersection Observer to observe when the section is in view.
    // If the section is in view, the 'fade-in' class is added to it.
    // The observer is disconnected when the component unmounts.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.5 });

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [id]);

  // Render a div with the id and children passed in as props.
  // The div also has a class of 'section1' from the imported styles.
  return (
    <div id={id} className={styles.section1}>
      {children}
    </div>
  );
};

export default Section;
