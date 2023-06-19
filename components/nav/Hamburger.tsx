/** Hamburger.tsx
 *
 *  This is a reusable Hamburger component for the website.
 *  It contains a hamburger icon that toggles a dropdown menu when clicked.
 *  
 *  @import {React} from 'react' - Importing React from the React library.
 *  @import styles from '../../styles/components/nav/Hamburger.module.css' - Importing the CSS styles for this component from a CSS Module.
 *  
 *  @interface Props - A TypeScript interface defining the shape of the props that the 'Hamburger' component expects.
 *      The 'onClick' prop is a function that gets called when the hamburger icon is clicked.
 *      The 'showDropdown' prop is a boolean that determines whether the dropdown menu is displayed or not.
 *
 *  @function Hamburger - The Hamburger component that renders the hamburger icon.
 *      It returns a div element that, when clicked, triggers the 'onClick' function and toggles the dropdown menu.
 *  
 *  @export Hamburger - The Hamburger component is exported for use in other components.
 *
 */
import React from "react";
import styles from "../../styles/components/nav/Hamburger.module.css";

interface Props {
  onClick: () => void;
  showDropdown: boolean;
}

const Hamburger: React.FC<Props> = ({ onClick, showDropdown }) => {
  // The Hamburger component renders a div element that, when clicked, triggers the 'onClick' function and toggles the dropdown menu.
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
