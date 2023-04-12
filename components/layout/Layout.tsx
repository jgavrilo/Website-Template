/** Layout.tsx
 * 
 *  This is the Layout component for the website.
 *  It wraps the main content of the page with a header (Navbar) and footer (Footer).
 *  It also includes LeftColumn and RightColumn components for the sidebars.
 *
 */

import React from 'react';
import Navbar from '../nav/Navbar';
import Footer from '../nav/Footer';
import styles from '../../styles/components/layout/Layout.module.css';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import { FaFacebook, FaInstagram, FaGithub, FaSpotify, FaLinkedin } from 'react-icons/fa';

// Define the type for the Layout component's props
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Define the sections and their corresponding navigation items
  const sections = [
    { id: 'intro', text: 'Home' },
    { id: 'aboutme', text: 'About Me' },
    { id: 'experience', text: 'Experience' },
    { id: 'education', text: 'Education' },
    { id: 'projects', text: 'Projects' },
  ];

  // Define the social media icons and their corresponding links
  const socialIcons=[
    { id: "facebook", icon: <FaFacebook />, link: "https://www.facebook.com" },
    { id: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com" },
    { id: "github", icon: <FaGithub />, link: "https://www.github.com" },
    { id: "spotify", icon: <FaSpotify />, link: "https://www.github.com" },
    { id: "linkedin", icon: <FaLinkedin />, link: "https://www.github.com" },
  ];

  // Render the Layout component
  return (
    <div className={styles.pageWrapper}>
      <Navbar items={sections}/>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <LeftColumn items={sections} />
        </div>
        <main className={styles.mainContent}>{children}</main>
        <div className={styles.rightColumn}>
          <RightColumn socialIcons={socialIcons} />;
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
