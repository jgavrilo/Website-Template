import React from 'react';
import styles from '../styles/components/RightColumn.module.css';

interface RightColumnProps {
  socialIcons: { id: string; icon: React.ReactNode; link: string }[];
}

const RightColumn: React.FC<RightColumnProps> = ({ socialIcons }) => {
  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <aside className={styles.rightColumn}>
      {socialIcons.map((icon) => (
        <span
          key={icon.id}
          className={styles.item}
          onClick={() => openLink(icon.link)}
        >
          {icon.icon}
        </span>
      ))}
    </aside>
  );
};

export default RightColumn;
