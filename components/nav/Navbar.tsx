/** Navbar.tsx
 * 
 *  This is the Navbar component for the website.
 *  It contains a navigation bar with links to scroll to different sections of the page.
 * 
 */
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/components/nav/Navbar.module.css";
import Hamburger from "../Hamburger";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [navBarHidden, setNavBarHidden] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition < lastScrollPosition) {
        setNavBarHidden(false);
      } else {
        setNavBarHidden(true);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
        <span className={styles.brand}>Jeremy Gavrilov</span>
        <Hamburger onClick={toggleDropdown} showDropdown={showDropdown} />
        {showDropdown && (
        <div className={styles.dropdownContainer}>
            <ul className={styles.dropdownMenu}>
                <li className={styles.navLink}>
                    <span onClick={() => scrollToSection("intro")}>
                        Home
                    </span>
                </li>
                <li className={styles.navLink}>
                    <span onClick={() => scrollToSection("aboutme")}>
                        About Me
                    </span>
                </li>
                <li className={styles.navLink}>
                    <span onClick={() => scrollToSection("skills")}>
                        Skills
                    </span>
                </li>
                <li className={styles.navLink}>
                    <span onClick={() => scrollToSection("experience")}>
                        Experience
                    </span>
                </li>
                <li className={styles.navLink}>
                    <span onClick={() => scrollToSection("education")}>
                        Education
                    </span>
                </li>
                <li className={styles.navLink}>
                    <span onClick={() => scrollToSection("projects")}>
                        Projects
                    </span>
                </li>
            </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
