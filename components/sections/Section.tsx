import { useEffect, useRef } from 'react';
import styles from '../../styles/pages/Home.module.css';

type SectionProps = {
    id: string;
    children: React.ReactNode;
  };
  
  const Section = ({ id, children }: SectionProps) => {
    useEffect(() => {
      const section = document.querySelector(`#${id}`);
      if (!section) return;
  
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
  
    return (
      <div id={id} className={styles.section1}>
        {children}
      </div>
    );
  };
  
  export default Section;