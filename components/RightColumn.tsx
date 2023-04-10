import React from 'react';
import styles from '../styles/components/RightColumn.module.css';

interface RightColumnProps {
  items: { id: string; text: string }[];
}

const RightColumn: React.FC<RightColumnProps> = ({ items }) => {
  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={styles.rightColumn}>
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

export default RightColumn;
