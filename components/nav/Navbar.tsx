/** Navbar.tsx
 * 
 *  This is the Navbar component for the website.
 *  It contains a navigation bar with links to scroll to different sections of the page.
 * 
 */
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/components/nav/Navbar.module.css";
import Hamburger from "../Hamburger";

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
        setShowDropdown(false);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
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
