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
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

  return (
    <header className={styles.header} ref={headerRef}>
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
