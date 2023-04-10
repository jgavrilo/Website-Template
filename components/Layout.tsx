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

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.container}>
        <aside className={styles.leftColumn}></aside>
        <main className={styles.mainContent}>{children}</main>
        <aside className={styles.rightColumn}></aside>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
