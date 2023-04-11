import React from 'react';
import styles from '../styles/components/LeftColumn.module.css';

interface LeftColumnProps {
  items: { id: string; text: string }[];
}

const LeftColumn: React.FC<LeftColumnProps> = ({ items }) => {
  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={styles.leftColumn}>
      {items.map((item) => (
        <span
          key={item.id}
          className={styles.item}
          onClick={() => scrollToSection(item.id)}
        >
          {item.text}
        </span>
      ))}
    </aside>
  );
};

export default LeftColumn;
