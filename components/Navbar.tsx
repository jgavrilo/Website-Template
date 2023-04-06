/** Navbar.tsx
 * 
 *  This is the Navbar component for the website.
 *  It contains a navigation bar with links to scroll to different sections of the page.
 * 
 */
import React from 'react';
import styles from '../styles/components/Navbar.module.css';

const Navbar: React.FC = () => {

    const scrollToSection = (id: string) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
        };

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <span onClick={() => 
                            scrollToSection('section1')} 
                            className={styles.navLink}>
                            Section 1
                        </span>
                    </li>
                    <li className={styles.navItem}>
                        <span onClick={() => 
                            scrollToSection('section2')} 
                            className={styles.navLink}>
                            Section 2
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
