/** index.tsx
 * 
 *  This is the homepage of the website.
 *  It contains two sections with placeholder content.
 *
 */
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/pages/Home.module.css';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div id="section1" className={styles.section1}>
        Content goes here
      </div>
      <div id="section2" className={styles.section2}>
        Content goes here
      </div>
    </Layout>
  );
};

export default HomePage;
