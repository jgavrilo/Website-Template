/** Navbar.tsx
 * 
 *  This is the Navbar component for the website.
 *  It contains a navigation bar with links to scroll to different sections of the page.
 *  The navigation bar is responsive and hides when scrolling down, reappearing when scrolling up.
 *  In mobile view, a hamburger menu is used to display the navigation links.
 *
 *  @import React, { useState, useEffect, useRef } from "react" - Importing React, useState, useEffect and useRef hooks from the React library.
 *  @import styles from "../../styles/components/nav/Navbar.module.css" - Importing the CSS styles for this component from a CSS Module.
 *  @import Hamburger from "./Hamburger" - Importing the Hamburger component to display a hamburger icon in mobile view.
 *  @import { WEBSITE_NAME } from "../Constants" - Importing the WEBSITE_NAME constant.
 *  
 *  @interface NavbarProps - A TypeScript interface defining the shape of the props that the 'Navbar' component expects.
 *      The 'items' prop is an array of objects, each representing a link to a section of the page.
 *
 *  @function Navbar - The Navbar component that renders the navigation bar.
 *      It maintains several pieces of state to handle scrolling, resizing and click events, and to control the visibility of the dropdown menu and navigation bar.
 *      It also utilizes the useRef hook to create a reference to the navigation bar DOM element.
 *  
 *  @export Navbar - The Navbar component is exported for use in other components.
 *
 */
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/components/nav/Navbar.module.css";
import Hamburger from "./Hamburger";
import { WEBSITE_NAME } from "../Constants";

interface NavbarProps {
  items: { id: string; text: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [navBarHidden, setNavBarHidden] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle click events outside the navbar
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    // Handle scroll events to hide or show the navbar
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition < lastScrollPosition) {
        setNavBarHidden(false);
      } else {
        setNavBarHidden(true);
        setShowDropdown(false);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    // Handle resize events to determine if the view is in mobile or desktop mode
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Initialize isMobileView state
    handleResize();

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollPosition]);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Scroll smoothly to the target section
  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setShowDropdown(false);
    }
  };

  const navbarClasses = navBarHidden
    ? `${styles.header} ${styles.hidden}`
    : styles.header;

  return (
    <header className={navbarClasses} ref={headerRef}>
        <span className={styles.brand}>{WEBSITE_NAME}</span>
        {isMobileView && <Hamburger onClick={toggleDropdown} showDropdown={showDropdown} />}
        {showDropdown && (
        <div className={styles.dropdownContainer}>
        <ul className={styles.dropdownMenu}>
          {items.map((item) => (
            <li key={item.id} className={styles.navLink}>
              <span onClick={() => scrollToSection(item.id)}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      )}
    </header>
  );
};

export default Navbar;
