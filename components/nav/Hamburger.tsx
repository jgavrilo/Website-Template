/** Hamburger.tsx
 *
 *  This is a reusable Hamburger component for the website.
 *  It contains a hamburger icon that toggles a dropdown menu when clicked.
 *
 */
import React from "react";
import styles from "../../styles/components/nav/Hamburger.module.css";

interface Props {
  onClick: () => void;
  showDropdown: boolean;
}

const Hamburger: React.FC<Props> = ({ onClick, showDropdown }) => {
  return (
    <div className={styles.hamburgerWrapper}>
      <div className={`${styles.hamburger} ${showDropdown ? styles.hamburgerCross : ""} ${styles.hamburgerFadeSpin}`} onClick={onClick}>
        <div className={`${styles.hamburgerLine} ${showDropdown ? styles.hamburgerLineCross1 : ""}`}></div>
        <div className={`${styles.hamburgerLine} ${showDropdown ? styles.hamburgerLineCross2 : ""}`}></div>
        <div className={`${showDropdown ? styles.hamburgerLineCross1 : styles.hamburgerLine}`}></div>
      </div>
    </div>
  );
};

export default Hamburger;