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
import RightColumn from './RightColumn';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const rightColumnItems = [
    { id: 'intro', text: 'Home' },
    { id: 'aboutme', text: 'About Me' },
    { id: 'experience', text: 'Experience' },
    { id: 'education', text: 'Education' },
    { id: 'projects', text: 'Projects' },
  ];
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.container}>
        <aside className={styles.leftColumn}></aside>
        <main className={styles.mainContent}>{children}</main>
        <div className={styles.rightColumn}>
        <RightColumn items={rightColumnItems} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
