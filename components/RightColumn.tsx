import React from 'react';
import styles from '../styles/components/RightColumn.module.css';

interface RightColumnProps {
  socialIcons: { id: string; iconSrc: string; link: string }[];
}

const RightColumn: React.FC<RightColumnProps> = ({ socialIcons }) => {
  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <aside className={styles.rightColumn}>
      {socialIcons.map((icon) => (
        /*<img
          key={icon.id}
          src={icon.iconSrc}
          alt="social media icon"
          className={styles.icon}
          onClick={() => openLink(icon.link)}
        />*/
        <span
          className={styles.item}        
          >
          {icon.id}
        </span>
      ))}
      
    </aside>
  );
};

export default RightColumn;
