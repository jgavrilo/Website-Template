/** Layout.tsx
 * 
 *  This is the Layout component for the website.
 *  It wraps the main content of the page with a header and footer.
 *
 */
import React from 'react';
import Navbar from './nav/Navbar';
import Footer from './nav/Footer';
import styles from '../styles/components/Layout.module.css';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const sections = [
    { id: 'intro', text: 'Home' },
    { id: 'aboutme', text: 'About Me' },
    { id: 'experience', text: 'Experience' },
    { id: 'education', text: 'Education' },
    { id: 'projects', text: 'Projects' },
  ];

  const socialIcons = [
    {
      id: 'linkedin',
      iconSrc: 'path/to/linkedin/icon',
      link: 'https://www.linkedin.com/in/yourprofile',
    },
    {
      id: 'twitter',
      iconSrc: 'path/to/twitter/icon',
      link: 'https://twitter.com/yourusername',
    },
    {
      id: 'github',
      iconSrc: 'path/to/github/icon',
      link: 'https://github.com/yourusername',
    },
  ];

  
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
