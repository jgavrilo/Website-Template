/** Navbar.tsx
 * 
 *  This is the Navbar component for the website.
 *  It contains a navigation bar with links to scroll to different sections of the page.
 * 
 */
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/components/Navbar.module.css";

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
        <div className={styles.hamburgerWrapper}>
            <span className={styles.brand}>Jeremy Gavrilov</span>
            <div className={styles.hamburger} onClick={toggleDropdown}>
                <div className={styles.hamburgerLine}></div>
                <div className={styles.hamburgerLine}></div>
                <div className={styles.hamburgerLine}></div>
            </div>
        </div>
        {showDropdown && (
        <div className={styles.dropdownContainer}>
            <ul className={styles.dropdownMenu}>
                <li className={styles.navLink}>
                    <span onClick={() => scrollToSection("section1")}>
                        Product 1
                    </span>
                </li>
                <li className={styles.navLink}>
                    <span onClick={() => scrollToSection("section2")}>
                        Product 2
                    </span>
                </li>
            </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
